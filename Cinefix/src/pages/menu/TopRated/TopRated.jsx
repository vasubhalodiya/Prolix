import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesStart, fetchMoviesSuccess, fetchMoviesFailure } from '../../../redux/topRatedMoviesSlice';
import TopRatedCard from '../../../components/TopRatedCard/TopRatedCard';
import '../../../components/TopRatedCard/TopRatedCard.css'


const TopRated = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.topRatedMovies);
  const [genres, setGenres] = useState([]); // Store genres list

  useEffect(() => {
    // Fetch genres list
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=0c9eb6c7265733aad8b14540ca4cdf5f&language=en-US')
      .then((response) => response.json())
      .then((data) => {
        setGenres(data.genres); // Store genres in state
      })
      .catch((error) => console.error('Error fetching genres:', error));

    // Fetch movies
    dispatch(fetchMoviesStart());
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=0c9eb6c7265733aad8b14540ca4cdf5f&with_companies=2&sort_by=vote_average.desc&vote_count.gte=100')
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchMoviesSuccess(data.results)); // Dispatch success with fetched data
      })
      .catch((error) => {
        dispatch(fetchMoviesFailure(error.message)); // Dispatch failure in case of an error
      });
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
    <div className="top-rated-movies">
      <h1 className='section-heading'>Top Rated Movies</h1>
      <div className="top-rated-movie-list">
        {movies.map((movie, index) => (
          <TopRatedCard
            key={movie.id}
            rank={index + 1}
            title={movie.title}
            poster={movie.poster_path}
            rating={movie.vote_average}
            genre={getGenreName(movie.genre_ids[0])}
            studio={getStudioNames(movie.production_companies)} // Pass studio names
          />
        ))}

      </div>
    </div>
  );
};

export default TopRated;


