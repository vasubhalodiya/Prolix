import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import MovieCard from '@/components/MovieCard/MovieCard';
import './Search.css';
import Button from '@/components/Button/Button';

const searchApi = (query) =>
  Promise.all([
    // fetch(`https://api.themoviedb.org/3/discover/movie?api_key=0c9eb6c7265733aad8b14540ca4cdf5f&with_companies=2&sort_by=vote_average.desc&vote_count.gte=100&page=1&language=en-US&query=${query}`).then(res => res.json()),
    // fetch(`https://api.themoviedb.org/3/discover/movie?api_key=0c9eb6c7265733aad8b14540ca4cdf5f&with_genres=28,12,16&query=${query}`).then(res => res.json()),
    // fetch(`https://api.themoviedb.org/3/discover/tv?api_key=0c9eb6c7265733aad8b14540ca4cdf5f&with_companies=420&language=en-US&query=${query}`).then(res => res.json()),
    // fetch(`https://api.themoviedb.org/3/discover/tv?api_key=0c9eb6c7265733aad8b14540ca4cdf5f&with_origin_country=IN&first_air_date.gte=2023-01-01&language=en-US&query=${query}`).then(res => res.json())
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=0c9eb6c7265733aad8b14540ca4cdf5f&with_companies=2&sort_by=vote_average.desc&vote_count.gte=100&page=1&language=en-US&query=${query}`)
      .then(res => res.json())
      .then(data => {
        return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=0c9eb6c7265733aad8b14540ca4cdf5f&with_genres=28,12,16&query=${query}`)
      })
      .then(res => res.json())
      .then(data => {
        return fetch(`https://api.themoviedb.org/3/discover/tv?api_key=0c9eb6c7265733aad8b14540ca4cdf5f&with_companies=420&language=en-US&query=${query}`)
      })
      .then(res => res.json())
      .then(data => {
        return fetch(`https://api.themoviedb.org/3/discover/tv?api_key=0c9eb6c7265733aad8b14540ca4cdf5f&with_origin_country=IN&first_air_date.gte=2023-01-01&language=en-US&query=${query}`)
      })
  ]);

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noDataFound, setNoDataFound] = useState(false);
  const navigate = useNavigate();
  const [genres, setGenres] = useState([]);

  const fetchMovies = async (searchQuery) => {
    if (!searchQuery) return setSuggestions([]);

    setLoading(true);
    setNoDataFound(false);

    try {
      const [movies, tvShows] = await searchApi(searchQuery);
      const allResults = [
        ...(movies.results || []).filter(movie => movie.title && movie.title.toLowerCase().includes(searchQuery.toLowerCase())),
        ...(tvShows.results || []).filter(show => show.name && show.name.toLowerCase().includes(searchQuery.toLowerCase()))
      ];

      if (allResults.length === 0) {
        setNoDataFound(true);
      } else {
        setSuggestions(allResults);
      }
    } catch {
      setNoDataFound(true);
    } finally {
      setLoading(false);
    }
  };

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

  useEffect(() => {
    const debounceTimer = setTimeout(() => fetchMovies(query), 300);
    return () => clearTimeout(debounceTimer);
  }, [query]);

  const handleSearchClick = () => {
    fetchMovies(query);
  };

  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <div className="search-page">
      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for something epic"
          className="search-input" />
        <Button onClick={handleSearchClick} className="search-button">Search</Button>
      </div>

      <div>
        <div className="moviecard-container">
          <h2 className='section-heading'>Suggestions</h2>
          {loading ? (
            <p className='master-loading'>Loading...</p>
          ) : noDataFound ? (
            <p className='master-error'>No suggestions found</p>
          ) : (
            <div className="moviecard-list-container">
              {suggestions.map((movie, index) => (
                <MovieCard
                  key={index}
                  poster={movie.backdrop_path || movie.poster_path}
                  title={movie.title || movie.name}
                  rating={movie.vote_average}
                  genre={getGenreName(movie.genre_ids[0])}
                  onClick={() => handleMovieClick(movie.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
