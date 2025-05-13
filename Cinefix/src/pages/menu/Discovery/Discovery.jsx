import React from 'react'
import './discovery.css'
import images from '../../../utils/images';
import StudioSlider from '@/components/StudioSlider/StudioSlider';
import Button from '@/components/Button/Button';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ComingSoonMovies from '@/components/ComingSoonMovies/ComingSoonMovies';
import ContinueWatching from '@/components/PopularMovies/PopularMovies';


const Discovery = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const navigate = useNavigate();
  const continueList = useSelector((state) => state.continueWatching);

  // useEffect(() => {
  //   const fetchTopRatedMovies = async () => {
  //     try {
  //       const API_KEY = "0c9eb6c7265733aad8b14540ca4cdf5f"; // Your API key
  //       const companyId = 2; // Example company ID
  //       const res = await fetch(
  //         `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_companies=${companyId}&sort_by=vote_average.desc&vote_count.gte=100&page=1&language=en-US`
  //       );
  //       const data = await res.json();

  //       const top3Movies = data.results.slice(0, 5);
  //       setTopRatedMovies(top3Movies);
  //     } catch (error) {
  //       console.error("Error fetching top-rated movies:", error);
  //     }
  //   };

  //   fetchTopRatedMovies();
  // }, []);

  // useEffect(() => {
  //   fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=0c9eb6c7265733aad8b14540ca4cdf5f&language=en-US')
  //     .then((response) => response.json())
  //     .then((data) => setGenres(data.genres))
  //     .catch((error) => console.error('Error fetching genres:', error));
  // }, []);

  // const getGenreName = (genreId) => {
  //   const genre = genres.find((genre) => genre.id === genreId);
  //   return genre ? genre.name : 'Unknown';
  // };

  // const handleCardClick = (movieId) => {
  //   navigate(`/toprated/${movieId}`);
  // };

  return (
    <>
      <div className="discovery">
        <div className="discovery-cnt">
          <div className="coming-soon-movies-slider slider-section">
            <ComingSoonMovies/>
          </div>
          <div className="disc-studios-slider slider-section">
            <StudioSlider />
          </div>
          <div className="disc-continue-watching-slider">
            <ContinueWatching />
          </div>
          {/* <div className="movie-sidebar">
            <div className="movie-sidebar-cnt">
              <div className="movie-sidebar-cnt-head">
                <h2 className='section-heading'>Top Rated</h2>
              </div>
              <div className="discovery-top-rated">
                {topRatedMovies.length > 0 ? (
                  topRatedMovies.map((movie, index) => (
                    <TopRatedCard
                      key={movie.id}
                      rank={index + 1}
                      title={movie.title}
                      poster={movie.poster_path}
                      rating={movie.vote_average}
                      genre={getGenreName(movie.genre_ids[0])}
                      onClick={() => navigate(`/toprated/${movie.id}`)}
                    />
                  ))
                ) : (
                  <div>No top-rated movies available.</div>
                )}
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Discovery