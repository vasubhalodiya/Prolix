// src/pages/MyBackpack.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromBackpack } from '../redux/backpackSlice'; // import removeFromBackpack action

const MyBackpack = () => {
  const dispatch = useDispatch();
  const backpackMovies = useSelector((state) => state.backpack.movies);

  const handleRemoveFromBackpack = (movieId) => {
    dispatch(removeFromBackpack({ id: movieId })); // Remove movie from backpack
  };

  return (
    <div>
      <h1>My Backpack</h1>
      {backpackMovies.length > 0 ? (
        <div className="backpack-movies">
          {backpackMovies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w200/${movie.poster}`}
                alt={movie.title}
              />
              <p>{movie.title}</p>
              <button onClick={() => handleRemoveFromBackpack(movie.id)}>
                Remove from Backpack
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No movies in backpack.</p>
      )}
    </div>
  );
};

export default MyBackpack;
