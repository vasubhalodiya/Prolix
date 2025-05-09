
import React, { useState, useEffect } from 'react';
import { useGetTopRatedMoviesQuery } from '../../../redux/movieApi'; // Use the correct query hook
import TopRatedCard from '../../../components/TopRatedCard/TopRatedCard';
import '../../../components/TopRatedCard/TopRatedCard.css';

const TopRated = () => {
  const { data: movies, isLoading, isError, error } = useGetTopRatedMoviesQuery(); // Use the correct RTK Query hook
  const [genres, setGenres] = useState([]); // Store genres list

  useEffect(() => {
    // Fetch genres list
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="top-rated-movies">
      <h1 className="section-heading">Top Rated Movies</h1>
      <div className="top-rated-movie-list">
        {movies && movies.results.length > 0 ? (
          movies.results.map((movie, index) => (
            <TopRatedCard
              key={movie.id}
              rank={index + 1}
              title={movie.title}
              poster={movie.poster_path}
              rating={movie.vote_average}
              genre={getGenreName(movie.genre_ids[0])}
            />
          ))
        ) : (
          <p>No top-rated movies available</p>
        )}
      </div>
    </div>
  );
};

export default TopRated;
