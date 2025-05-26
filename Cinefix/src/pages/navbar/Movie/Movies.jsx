import React, { useState, useEffect } from 'react';
import { useGetMoviesQuery } from '../../../redux/movieApi';
import MovieCard from '../../../components/MovieCard/MovieCard';
import '../../../components/MovieCard/MovieCard.css';
import { useNavigate } from 'react-router-dom';
import SkeletonCard from '../../../components/MovieCard/SkeletonCard';

const Movies = () => {
  const { data: movies, isLoading, isError, error } = useGetMoviesQuery();
  const [genres, setGenres] = useState([]);
  const navigate = useNavigate();
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

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

  const getStudioNames = (productionCompanies) => {
    if (!productionCompanies || productionCompanies.length === 0) return 'Unknown Studio';
    return productionCompanies.map((company) => company.name).join(', ');
  };

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading || showSkeleton) {
    return (
      <div className="movies">
        <div className="movies-cnt">
          <h1 className="section-heading">All Movies</h1>
          <div className="movies-list">
            {[...Array(10)].map((_, index) => (
              <div className="skeleton-card-container">
                <SkeletonCard key={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="movies">
      <div className="movies-cnt">
        <h1 className="section-heading">All Movies</h1>
        {/* <div className="movies-list">
          {movies && movies.results && movies.results.length > 0 ? (
            movies.results.map((movie) => {
              const isPremium = (movie.id % 10) < 7;
              const handleClick = () => {
                if (isPremium) {
                  const isSubscribed = localStorage.getItem('isSubscribed');
                  if (isSubscribed === 'true') {
                    navigate(`/movies/${movie.id}`);
                  } else {
                    localStorage.setItem('redirectAfterPayment', `/movies/${movie.id}`);
                    navigate('/subscribenotify');
                  }
                } else {
                  navigate(`/movies/${movie.id}`);
                }
              };
              return (
                <MovieCard
                  key={movie.id}
                  poster={movie.backdrop_path || movie.poster_path}
                  title={movie.title}
                  rating={movie.vote_average}
                  genre={getGenreName(movie.genre_ids[0])}
                  studio={getStudioNames(movie.production_companies)}
                  isPremium={isPremium}
                  onClick={handleClick}
                />
              );
            })
          ) : (
            <p>No movies available</p>
          )}
        </div> */}
        <div className="movies-list">
          {movies && movies.results && movies.results.length > 0 ? (
            movies.results.map((movie) => {
              const isPremium = (movie.id % 10) < 7;

              const handleClick = () => {
                localStorage.setItem('isPremiumMovie', isPremium);
                navigate(`/movies/${movie.id}`);
              };

              return (
                <MovieCard
                  key={movie.id}
                  poster={movie.backdrop_path || movie.poster_path}
                  title={movie.title}
                  rating={movie.vote_average}
                  genre={getGenreName(movie.genre_ids[0])}
                  studio={getStudioNames(movie.production_companies)}
                  isPremium={isPremium}
                  onClick={handleClick}
                />
              );
            })
          ) : (
            <p>No movies available</p>
          )}
        </div>

      </div>
    </div>
  );
};

export default Movies;
