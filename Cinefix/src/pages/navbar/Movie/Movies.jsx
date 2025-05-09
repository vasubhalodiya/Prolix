import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesStart, fetchMoviesSuccess, fetchMoviesFailure } from '../../../redux/moviesSlice';
import MovieCard from '../../../components/MovieCard/MovieCard';
import '../../../components/MovieCard/MovieCard.css';
import { useGetMoviesMutation } from '@/redux/action/movie';

const Movies = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.movies);
  const [genres, setGenres] = useState([]);

  const [getMovies] = useGetMoviesMutation();

  useEffect(() => {
    console.log("first")
    getMovies();

    // Fetch genres list
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=0c9eb6c7265733aad8b14540ca4cdf5f&language=en-US')
      .then((response) => response.json())
      .then((data) => {
        setGenres(data.genres);
      })
      .catch((error) => console.error('Error fetching genres:', error));

    // Fetch movies
    dispatch(fetchMoviesStart());
    // fetch('https://api.themoviedb.org/3/discover/movie?api_key=0c9eb6c7265733aad8b14540ca4cdf5f&with_genres=28,12,16')

    }, [dispatch]);

  // Function to get genre name from genre ID
  const getGenreName = (genreId) => {
    const genre = genres.find((genre) => genre.id === genreId);
    return genre ? genre.name : 'Unknown';
  };

  const getStudioNames = (productionCompanies) => {
    if (!productionCompanies || productionCompanies.length === 0) return 'Unknown Studio';
    return productionCompanies.map((company) => company.name).join(', ');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="movies">
      <div className="movies-cnt">
        <h1 className="section-heading">All Movies</h1>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              poster={movie.backdrop_path || movie.poster_path} // Use backdrop_path if available, else poster_path
              title={movie.title}
              rating={movie.vote_average}
              genre={getGenreName(movie.genre_ids[0])}
              studio={getStudioNames(movie.production_companies)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;


