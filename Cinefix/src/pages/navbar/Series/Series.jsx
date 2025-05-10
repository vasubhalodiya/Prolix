import React, { useState, useEffect } from 'react';
import { useGetSeriesQuery } from '../../../redux/movieApi';
import MovieCard from '../../../components/MovieCard/MovieCard';
import '../../../components/MovieCard/MovieCard.css';
import { useNavigate } from 'react-router-dom';

const Series = () => {
  const { data: series, isLoading, isError, error } = useGetSeriesQuery();
  const [genres, setGenres] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/genre/tv/list?api_key=0c9eb6c7265733aad8b14540ca4cdf5f&language=en-US')
      .then((response) => response.json())
      .then((data) => setGenres(data.genres))
      .catch((error) => console.error('Error fetching genres:', error));
  }, []);

  const getGenreName = (genreId) => {
    const genre = genres.find((genre) => genre.id === genreId);
    return genre ? genre.name : 'Unknown';
  };

  const getStudioNames = (productionCompanies) => {
    if (!productionCompanies || productionCompanies.length === 0) return 'Unknown Studio';
    return productionCompanies.map((company) => company.name).join(', ');
  };

  const handleCardClick = (movieId) => {
    navigate(`/series/${movieId}`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    console.log('Error:', error);
    return <div>Error: {error.message}</div>;
  }


  return (
    <div className="movies">
      <div className="movies-cnt">
        <h1 className="section-heading">All Series</h1>
        <div className="movies-list">
          {series && series.results && series.results.length > 0 ? (
            series.results.map((series) => (
              <MovieCard
                key={series.id}
                poster={series.backdrop_path || series.poster_path}
                title={series.name}
                rating={series.vote_average}
                // genre={getGenreName(series.genre_ids[0])}
                studio={getStudioNames(series.production_companies)}
                onClick={() => navigate(`/series/${series.id}`)}
              />
            ))
          ) : (
            <p>No series available</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Series
