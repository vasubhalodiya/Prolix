// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import MovieCard from '@/components/MovieCard/MovieCard';
// import './Search.css';
// import Button from '@/components/Button/Button';
// import SkeletonCard from '../../../components/MovieCard/SkeletonCard';

// const searchApi = (query) =>
//   Promise.all([
//     fetch(`https://api.themoviedb.org/3/discover/movie?api_key=0c9eb6c7265733aad8b14540ca4cdf5f&with_companies=2&sort_by=vote_average.desc&vote_count.gte=100&page=1&language=en-US&query=${query}`).then(res => res.json()),
//     fetch(`https://api.themoviedb.org/3/discover/movie?api_key=0c9eb6c7265733aad8b14540ca4cdf5f&with_genres=28,12,16&query=${query}`).then(res => res.json()),
//     fetch(`https://api.themoviedb.org/3/discover/tv?api_key=0c9eb6c7265733aad8b14540ca4cdf5f&with_companies=420&language=en-US&query=${query}`).then(res => res.json()),
//     fetch(`https://api.themoviedb.org/3/discover/tv?api_key=0c9eb6c7265733aad8b14540ca4cdf5f&with_origin_country=IN&first_air_date.gte=2023-01-01&language=en-US&query=${query}`).then(res => res.json()),
//     fetch(`https://api.themoviedb.org/3/discover/movie?api_key=0c9eb6c7265733aad8b14540ca4cdf5f&with_companies=420&sort_by=release_date.asc&primary_release_date.gte=2025-05-13&query=${query}`).then(res => res.json()),
//     fetch(`https://api.themoviedb.org/3/discover/movie?api_key=0c9eb6c7265733aad8b14540ca4cdf5f&with_companies=25&query=${query}`).then(res => res.json())
//   ]);

// const SearchPage = () => {
//   const [query, setQuery] = useState('');
//   const [suggestions, setSuggestions] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [noDataFound, setNoDataFound] = useState(false);
//   const navigate = useNavigate();
//   const [genres, setGenres] = useState([]);
//   const [showSkeleton, setShowSkeleton] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowSkeleton(false);
//     }, 1000);
//     return () => clearTimeout(timer);
//   }, []);
//   const fetchMovies = async (searchQuery) => {
//     if (!searchQuery) return setSuggestions([]);

//     setLoading(true);
//     setNoDataFound(false);

//     try {
//       const [res1, res2, res3, res4, res5, res6] = await searchApi(searchQuery);

//       const allResults = [
//         ...(res1.results || []).filter(movie => movie.title && movie.title.toLowerCase().includes(searchQuery.toLowerCase())),
//         ...(res2.results || []).filter(movie => movie.title && movie.title.toLowerCase().includes(searchQuery.toLowerCase())),
//         ...(res3.results || []).filter(show => show.name && show.name.toLowerCase().includes(searchQuery.toLowerCase())),
//         ...(res4.results || []).filter(show => show.name && show.name.toLowerCase().includes(searchQuery.toLowerCase())),
//         ...(res5.results || []).filter(movie => movie.title && movie.title.toLowerCase().includes(searchQuery.toLowerCase())),
//         ...(res6.results || []).filter(movie => movie.title && movie.title.toLowerCase().includes(searchQuery.toLowerCase()))
//       ];

//       if (allResults.length === 0) {
//         setNoDataFound(true);
//       } else {
//         setSuggestions(allResults);
//       }
//     } catch {
//       setNoDataFound(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=0c9eb6c7265733aad8b14540ca4cdf5f&language=en-US')
//       .then((response) => response.json())
//       .then((data) => setGenres(data.genres))
//       .catch((error) => console.error('Error fetching genres:', error));
//   }, []);

//   const getGenreName = (genreId) => {
//     const genre = genres.find((genre) => genre.id === genreId);
//     return genre ? genre.name : 'Unknown';
//   };

//   useEffect(() => {
//     const debounceTimer = setTimeout(() => fetchMovies(query), 300);
//     return () => clearTimeout(debounceTimer);
//   }, [query]);

//   const handleSearchClick = () => {
//     fetchMovies(query);
//   };

//   const handleMovieClick = (movieId) => {
//     navigate(`/movie/${movieId}`);
//   };

//   return (
//     <div className="search-page">
//       <div className="search-bar">
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Search for something epic"
//           className="search-input" />
//         <Button onClick={handleSearchClick} className="search-button">Search</Button>
//       </div>

//       <div>
//         <div className="moviecard-container">
//           {!loading && !noDataFound && suggestions.length > 0 && (
//             <h2 className='section-heading'>Suggestions</h2>
//           )}
//           {loading ? (
//             <div className="movies">
//               <div className="movies-cnt">
//                 <h1 className="section-heading">All Movies</h1>
//                 <div className="movies-list">
//                   {[...Array(10)].map((_, index) => (
//                     <div className="skeleton-card-container">
//                       <SkeletonCard key={index} />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ) : noDataFound ? (
//             <p className='master-error'>No suggestions found</p>
//           ) : (
//             <div className="movies-list">
//               {suggestions.map((movie, index) => (
//                 <MovieCard
//                   key={index}
//                   poster={movie.backdrop_path || movie.poster_path}
//                   title={movie.title || movie.name}
//                   rating={movie.vote_average}
//                   genre={getGenreName(movie.genre_ids[0])}
//                   onClick={() => handleMovieClick(movie.id)}
//                 />
//               ))}
//             </div>
//           )}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default SearchPage;



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieCard from '@/components/MovieCard/MovieCard';
import './Search.css';
import Button from '@/components/Button/Button';
import SkeletonCard from '@/components/MovieCard/SkeletonCard';
import { useGetMergedSearchResultsQuery } from '../../../redux/movieApi'; // ✅ Updated hook

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [genres, setGenres] = useState([]);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const navigate = useNavigate();

  const { data, isLoading, isError } = useGetMergedSearchResultsQuery(query, {
    skip: query.trim().length === 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=0c9eb6c7265733aad8b14540ca4cdf5f&language=en-US'
    )
      .then((response) => response.json())
      .then((data) => setGenres(data.genres))
      .catch((error) => console.error('Error fetching genres:', error));
  }, []);

  const getGenreName = (genreId) => {
    const genre = genres.find((genre) => genre.id === genreId);
    return genre ? genre.name : 'Unknown';
  };

  const handleSearchClick = () => {
    // no-op: search triggers on input change
  };

  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  const suggestions =
    data?.filter((item) =>
      (item.title || item.name)?.toLowerCase().includes(query.toLowerCase())
    ) || [];

  const noDataFound = !isLoading && !isError && suggestions.length === 0;

  return (
    <div className="search-page">
      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for something epic"
          className="search-input"
        />
        <Button onClick={handleSearchClick} className="search-button">
          Search
        </Button>
      </div>

      <div className="moviecard-container">
        {!isLoading && !noDataFound && suggestions.length > 0 && (
          <h2 className="section-heading">Suggestions</h2>
        )}

        {isLoading ? (
          <div className="movies">
            <div className="movies-cnt">
              <h1 className="section-heading">All Movies</h1>
              <div className="movies-list">
                {[...Array(10)].map((_, index) => (
                  <div className="skeleton-card-container" key={index}>
                    <SkeletonCard />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : noDataFound ? (
          <p className="master-error">No suggestions found</p>
        ) : (
          <div className="movies-list">
            {suggestions.map((item, index) => (
              <MovieCard
                key={index}
                poster={item.backdrop_path || item.poster_path}
                title={item.title || item.name}
                rating={item.vote_average}
                genre={getGenreName(item.genre_ids?.[0])}
                onClick={() => handleMovieClick(item.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
