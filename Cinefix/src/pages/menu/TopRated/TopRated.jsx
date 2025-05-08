import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesStart, fetchMoviesSuccess, fetchMoviesFailure } from '../../../redux/topRatedMoviesSlice';
import TopRatedCard from '../../../components/TopRatedCard/TopRatedCard';

const TopRated = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.topRatedMovies);

  useEffect(() => {
    // Start the loading process
    dispatch(fetchMoviesStart());

    // Fetch top-rated movies from TMDB API
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=0c9eb6c7265733aad8b14540ca4cdf5f&with_companies=2&sort_by=vote_average.desc&vote_count.gte=100')
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchMoviesSuccess(data.results)); // Dispatch success with fetched data
      })
      .catch((error) => {
        dispatch(fetchMoviesFailure(error.message)); // Dispatch failure in case of an error
      });
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="top-rated-movies">
      <h1>Top Rated Movies</h1>
      <div className="top-rated-movie-list">
        {movies.map((movie) => (
          <TopRatedCard
            key={movie.id}
            title={movie.title}
            poster={movie.poster_path}
            rating={movie.vote_average}
            genre={movie.genre_ids[0]} // Simplified for demo
          />
        ))}
      </div>
    </div>
  );
};

export default TopRated;
