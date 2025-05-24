import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import MovieSidebar from "../MovieSidebar/MovieSidebar";
import "./MovieDetails.css";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movieDetails, setMovieDetails] = useState(null);
  const [videoKey, setVideoKey] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [showVideo, setShowVideo] = useState(false);
  const navigate = useNavigate();
  

  const type = location.pathname.includes("/series/") ? "tv" : "movie";

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const API_KEY = "0c9eb6c7265733aad8b14540ca4cdf5f";

        const res = await fetch(
          `https://api.themoviedb.org/3/${type}/${movieId}?api_key=${API_KEY}&append_to_response=videos`
        );
        const data = await res.json();
        setMovieDetails(data);

        if (data.videos?.results?.length) {
          setVideoKey(data.videos.results[0].key);
        }

        const companyId = data.production_companies?.[0]?.id;

        if (companyId) {
          const recRes = await fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_companies=${companyId}`
          );
          const recData = await recRes.json();
          const filtered = recData.results.filter(
            (movie) => movie.id !== data.id
          );
          setRecommendations(filtered.slice(0, 3));
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    if (movieId) {
      fetchMovieDetails();
    }
  }, [movieId, type]);

  useEffect(() => {
      localStorage.removeItem('redirectAfterPayment');
  }, [navigate])
  
  const handleAddToBackpack = (movie) => {
    const stored = JSON.parse(localStorage.getItem("myBackpack")) || [];

    if (stored.some((m) => m.id === movie.id)) {
      toast.warning('Already in backpack');
      return;
    }

    const movieToStore = {
      id: movie.id,
      title: movie.title || movie.name,
      poster_path: movie.backdrop_path,
    };

    const updated = [...stored, movieToStore];
    localStorage.setItem("myBackpack", JSON.stringify(updated));
    window.dispatchEvent(new Event("backpackUpdated"));
    toast.success('Added to backpack');
  };

  if (!movieDetails) return <div>Loading...</div>;

  return (
    <div className="movie-details-container master-container">
      <div className="movie-main-details">
        <div className="movie-info">
          {videoKey && (
            <div className="trailer">
              {!showVideo ? (
                <div className="trailer-relative">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
                    alt={movieDetails.title || movieDetails.name}
                    className="movie-thumbnail" />
                  <div className="movie-play-btn-detail" onClick={()=> setShowVideo(true)}>
                    <div className="play-btn">
                      <div className="play-btn-circle">
                        <i className="fa-solid fa-play btn-play"></i>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
              )}
            </div>
          )}

          <div className="movie-details-section">
            <div className="movie-details-title-with-btn">
              <h1 className="movie-details-title">
                {movieDetails.title || movieDetails.name}
              </h1>
              <button className="add-to-backpack-btn" onClick={() => handleAddToBackpack(movieDetails)}><i className="fa-regular fa-backpack"></i><span>Add to Backpack</span></button>
            </div>
            <p className="movie-details-genres">
              <i className="fa-light fa-film"></i>{" "}
              {movieDetails.genres
                ? movieDetails.genres.slice(0, 2).map((g) => g.name).join(" • ")
                : "N/A"}
            </p>
            <p className="movie-details-rating">
              <i className="fa-solid fa-star"></i>{" "}
              {movieDetails.vote_average
                ? movieDetails.vote_average.toFixed(1)
                : "N/A"}
            </p>
            <p className="movie-details-release-date">
              <i className="fa-light fa-calendar-days"></i>{" "}
              {movieDetails.release_date || movieDetails.first_air_date || "N/A"}
            </p>
          </div>

          <div className="movie-details-storyline-txt-section">
            <h5 className="top-rated-movie-title moviecard-title">Storyline</h5>
            <p className="movie-details-storyline">
              {movieDetails.overview || "No Storyline Available."}
            </p>
          </div>
        </div>
      </div>

      {recommendations.length > 0 && (
        <MovieSidebar recommendations={recommendations} />
      )}
    </div>
  );
};

export default MovieDetails;
