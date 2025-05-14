import React, { useEffect, useState } from "react";
import "./MyBackpack.css";
import { useNavigate } from 'react-router-dom';

const MyBackpack = () => {
  const [backpackMovies, setBackpackMovies] = useState([]);
  const navigate = useNavigate();

  const loadBackpack = () => {
    const stored = localStorage.getItem("myBackpack");
    if (stored) setBackpackMovies(JSON.parse(stored));
  };

  useEffect(() => {
    loadBackpack();
    window.addEventListener("backpackUpdated", loadBackpack);
    return () => window.removeEventListener("backpackUpdated", loadBackpack);
  }, []);

  const handleRemoveFromBackpack = (movieId) => {
    const updated = backpackMovies.filter((movie) => movie.id !== movieId);
    setBackpackMovies(updated);
    localStorage.setItem("myBackpack", JSON.stringify(updated));
  };

  return (
    <div>
      <h1 className="section-heading">My Backpack</h1>
      {backpackMovies.length > 0 ? (
        <div className="backpack-movies-section">
          {backpackMovies.map((movie) => (
            <div key={movie.id} className="backpack-movie-card">
              <div className="backpack-movie-card-dtl" onClick={() => navigate(`/movie/${movie.id}`)}>
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title || movie.name} className="backpack-movie-card-img" />
                <p className="backpack-movie-title moviecard-title">{movie.title || movie.name}</p>
              </div>
              <button onClick={() => handleRemoveFromBackpack(movie.id)} className="backpack-remove-btn"><i class="fa-regular fa-trash-can"></i> Remove</button>
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
