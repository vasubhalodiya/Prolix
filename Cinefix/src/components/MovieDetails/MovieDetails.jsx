// import React, { useEffect, useState } from "react";
// import { useParams, useLocation } from "react-router-dom";
// import MovieCard from "../MovieCard/MovieCard";
// import MovieSidebar from "../MovieSidebar/MovieSidebar";
// import "./MovieDetails.css";

// const MovieDetails = () => {
//   const { movieId } = useParams();
//   const location = useLocation();
//   const [movieDetails, setMovieDetails] = useState(null);
//   const [videoKey, setVideoKey] = useState(null);
//   const [recommendations, setRecommendations] = useState([]);
//   const [showVideo, setShowVideo] = useState(false);

//   // Determine type of content (movie or tv)
//   const type = location.pathname.includes("/series/") ? "tv" : "movie";

//   useEffect(() => {
//     if (!movieId) {
//       console.error("movieId is undefined!");
//       return;
//     }

//     const fetchMovieDetails = async () => {
//       try {
//         const API_KEY = "0c9eb6c7265733aad8b14540ca4cdf5f";

//         const res = await fetch(
//           `https://api.themoviedb.org/3/${type}/${movieId}?api_key=${API_KEY}&append_to_response=videos`
//         );
//         const data = await res.json();
//         setMovieDetails(data);

//         if (data.videos?.results?.length) {
//           setVideoKey(data.videos.results[0].key);
//         }

//         const companyId = data.production_companies?.[0]?.id;

//         if (companyId) {
//           const recRes = await fetch(
//             `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_companies=${companyId}`
//           );
//           const recData = await recRes.json();
//           const filtered = recData.results.filter(
//             (movie) => movie.id !== data.id
//           );
//           setRecommendations(filtered.slice(0, 3));
//         }
//       } catch (error) {
//         console.error("Error fetching movie details:", error);
//       }
//     };

//     fetchMovieDetails();
//   }, [movieId, type]); // Make sure to depend on `movieId` and `type`

//   if (!movieDetails) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="movie-details-container master-container">
//       <div className="movie-main-details">
//         <div className="movie-info">
//           {videoKey && (
//             <div className="trailer">
//               {!showVideo ? (
//                 <div className="trailer-relative">
//                   <img
//                     src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
//                     alt={movieDetails.title || movieDetails.name}
//                     className="movie-thumbnail"
//                   />
//                   <div
//                     className="movie-play-btn-detail"
//                     onClick={() => setShowVideo(true)}
//                   >
//                     <div className="play-btn">
//                       <div className="play-btn-circle">
//                         <i className="fa-solid fa-play btn-play"></i>
//                       </div>
//                       <div className="play-btn-text moviecard-title">
//                         {movieDetails.title || movieDetails.name}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 <iframe
//                   width="100%"
//                   height="500"
//                   src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
//                   title="YouTube video player"
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//               )}
//             </div>
//           )}
//           <div className="movie-details-section">
//             <h1 className="movie-details-title">
//               {movieDetails.title || movieDetails.name}
//             </h1>
//             <p className="movie-details-genres">
//               <i className="fa-light fa-film"></i>{" "}
//               {movieDetails.genres
//                 ? movieDetails.genres.slice(0, 2).map((g) => g.name).join(" • ")
//                 : "N/A"}
//             </p>
//             <p className="movie-details-rating">
//               <i className="fa-solid fa-star"></i>{" "}
//               {movieDetails.vote_average
//                 ? movieDetails.vote_average.toFixed(1)
//                 : "N/A"}
//             </p>
//             <p className="movie-details-release-date">
//               <i className="fa-light fa-calendar-days"></i>{" "}
//               {movieDetails.release_date ||
//               movieDetails.first_air_date
//                 ? movieDetails.release_date || movieDetails.first_air_date
//                 : "N/A"}
//             </p>
//           </div>
//           <div className="movie-details-storyline-txt-section">
//             <h5 className="top-rated-movie-title moviecard-title">Storyline</h5>
//             <p className="movie-details-storyline">
//               {movieDetails.overview
//                 ? movieDetails.overview
//                 : "No Storyline Available."}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Only render MovieSidebar if there are recommendations */}
//       {recommendations.length > 0 && <MovieSidebar recommendations={recommendations} />}
//     </div>
//   );
// };

// export default MovieDetails;
// // rec = recommendations
// // res = response
// src/components/MovieDetails.jsx
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToBackpack } from '../redux/backpackSlice'; // import addToBackpack action

const MovieDetails = ({ movie }) => {
  const dispatch = useDispatch();

  const handleAddToBackpack = () => {
    dispatch(addToBackpack(movie)); // Add the movie to backpack
  };

  return (
    <div>
      <h1>{movie.title}</h1>
      <iframe
        id="player"
        width="100%"
        height="400"
        src={`https://www.youtube.com/embed/${movie?.youtubeVideoId}?enablejsapi=1`}
        allow="autoplay"
      />
      <button onClick={handleAddToBackpack}>Add to Backpack</button>
    </div>
  );
};

export default MovieDetails;
