import React, { useState, useEffect } from 'react';
import { useGetMoviesQuery } from '../../../redux/movieApi';
import MovieCard from '../../../components/MovieCard/MovieCard';
import '../../../components/MovieCard/MovieCard.css';


const Movies = () => {
  const { data: movies, isLoading, isError, error } = useGetMoviesQuery(); // Fetch movies using RTK Query hook

  const [genres, setGenres] = useState([]); // Store genres list

  useEffect(() => {
    // Fetch genres list from the API
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=0c9eb6c7265733aad8b14540ca4cdf5f&language=en-US')
      .then((response) => response.json())
      .then((data) => setGenres(data.genres))
      .catch((error) => console.error('Error fetching genres:', error));
  }, []);

  // Function to get genre name from genre ID
  const getGenreName = (genreId) => {
    const genre = genres.find((genre) => genre.id === genreId);
    return genre ? genre.name : 'Unknown';
  };

  const getStudioNames = (productionCompanies) => {
    if (!productionCompanies || productionCompanies.length === 0) return 'Unknown Studio';
    return productionCompanies.map((company) => company.name).join(', ');
  };

  if (isLoading) {
    console.log('Loading...');
    return <div>Loading...</div>; // Display loading message while fetching
  }

  if (isError) {
    console.log('Error:', error);
    return <div>Error: {error.message}</div>; // Display error message if fetching fails
  }

  return (
    <div className="movies">
      <div className="movies-cnt">
        <h1 className="section-heading">All Movies</h1>
        <div className="movies-list">
          {movies && movies.results && movies.results.length > 0 ? (
            movies.results.map((movie) => (
              <MovieCard
                key={movie.id}
                poster={movie.backdrop_path || movie.poster_path} // Use backdrop path if available
                title={movie.title}
                rating={movie.vote_average}
                genre={getGenreName(movie.genre_ids[0])} // Fetch the genre name based on genre ID
                studio={getStudioNames(movie.production_companies)} // Pass the studio names
              />
            ))
          ) : (
            <p>No movies available</p> // Display message if no movies are available
          )}
        </div>
      </div>
    </div>
  );
};

export default Movies;

