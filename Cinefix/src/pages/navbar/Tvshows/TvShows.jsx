import React, { useState, useEffect } from 'react';
import { useGetTvShowsQuery } from '../../../redux/movieApi';
import MovieCard from '../../../components/MovieCard/MovieCard';
import '../../../components/MovieCard/MovieCard.css';

const TvShows = () => {
  const { data: tvshows, isLoading, isError, error } = useGetTvShowsQuery(); // Fetch movies using RTK Query hook
  const [genres, setGenres] = useState([]); // Store genres list

  useEffect(() => {
      // Fetch genres list from the API
      fetch('https://api.themoviedb.org/3/discover/tv?api_key=0c9eb6c7265733aad8b14540ca4cdf5f&with_origin_country=IN&with_genres=18&language=en-US')
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
      return <div>Loading...</div>; // Display loading message while fetching
    }
  
    if (isError) {
      return <div>Error: {error.message}</div>; // Display error message if fetching fails
    }
  

  return (
    <div className="movies">
      <div className="movies-cnt">
        <h1 className="section-heading">All Tv Shows</h1>
        <div className="movies-list">
          {tvshows && tvshows.results && tvshows.results.length > 0 ? (
            tvshows.results.map((tv) => (
              <MovieCard
                key={tv.id}
                poster={tv.backdrop_path || tv.poster_path}
                title={tv.name}
                rating={tv.vote_average}
                // genre={getGenreName(tv.genre_ids[0])}
                studio={getStudioNames(tv.production_companies)}
              />
            ))
          ) : (
            <p>No Tv Shows available</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default TvShows