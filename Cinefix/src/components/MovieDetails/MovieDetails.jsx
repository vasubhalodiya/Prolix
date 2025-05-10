import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieDetails.css";
import MovieSidebar from "../MovieSidebar/MovieSidebar";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [videoKey, setVideoKey] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  const type = location.pathname.includes("/series/") ? "tv" : "movie";

  useEffect(() => {
    if (!movieId) {
      console.error("movieId is undefined!");
      return;
    }

    const fetchMovieDetails = async () => {
      try {
        const API_KEY = "0c9eb6c7265733aad8b14540ca4cdf5f";

        const res = await fetch(
          `https://api.themoviedb.org/3/${type}/${movieId}?api_key=${API_KEY}&append_to_response=videos`
        );
        const data = await res.json();
        setMovieDetails(data);

        if (data.videos && data.videos.results.length > 0) {
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

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="movie-sidebar">
        <div className="movie-sidebar-cnt">
          <div className="movie-sidebar-cnt-head">
            <h2 className='section-heading'>Recommendation</h2>
          </div>
          <div className="movie-sidebar-cnt-cards-list recommendation-cards-list">
            {recommendations.map((rec) => (
              <MovieCard
                key={rec.id}
                poster={rec.backdrop_path || rec.poster_path} // backdrop_path = horizontal, poster_path = vertical
                title={rec.title}
                rating={rec.vote_average}
              />
            ))}
          </div>
        </div>
      </div>
      <MovieSidebar recommendations={recommendations} />
    </>
  );
};

export default MovieDetails;


// rec = recommendations
// res = response

