import React, { useState, useEffect } from 'react';
import { useGetTopRatedMoviesQuery } from '../../../redux/movieApi';
import TopRatedCard from '../../../components/TopRatedCard/TopRatedCard';
import '../../../components/TopRatedCard/TopRatedCard.css';
import { useNavigate } from 'react-router-dom';
import NProgressbar from '../../../components/NProgressbar/NProgressbar';

const TopRated = () => {
  const { data: movies, isLoading, isError, error } = useGetTopRatedMoviesQuery();
  const [genres, setGenres] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=0c9eb6c7265733aad8b14540ca4cdf5f&language=en-US')
      .then((response) => response.json())
      .then((data) => setGenres(data.genres))
      .catch((error) => console.error('Error fetching genres:', error));
  }, []);

  const getGenreName = (genreId) => {
    const genre = genres.find((genre) => genre.id === genreId);
    return genre ? genre.name : 'Unknown';
  };

  const handleCardClick = (movieId) => {
    navigate(`/toprated/${movieId}`);
  };

  const isDataLoading = isLoading || genres.length === 0;

  return (
    <>
      <NProgressbar loading={isDataLoading} />

      {isError ? (
        <div>Error: {error.message}</div>
      ) : isDataLoading ? (
        <div>Loading...</div>
      ) : (
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
                  onClick={() => handleCardClick(movie.id)}
                />
              ))
            ) : (
              <p>No top-rated movies available</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default TopRated;
