import React, { useEffect, useState } from "react";

const MyBackpack = () => {
  const [backpackMovies, setBackpackMovies] = useState([]);

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
      <h1>My Backpack</h1>
      {backpackMovies.length > 0 ? (
        <div className="backpack-movies">
          {backpackMovies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title || movie.name}/>
              <p>{movie.title || movie.name}</p>
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
