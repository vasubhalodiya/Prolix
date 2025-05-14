import React from 'react';
import './PopularMovies.css';
import CommonSlider from '../CommonSlider/CommonSlider';
import Button from '../Button/Button';
import { useGetPopularMoviesQuery } from '@/redux/movieApi';
import { useNavigate } from 'react-router-dom';

const PopularMovies = () => {
    const { data, error, isLoading } = useGetPopularMoviesQuery();
    const navigate = useNavigate();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error.</p>;

    const popularMoviesData = data?.results || [];

    return (
        <CommonSlider
            title="Popular Movies"
            data={popularMoviesData}
            renderCard={(movie) => (
                <div key={movie.id} className="popular-movies-card" onClick={() => navigate(`/movie/${movie.id}`)}>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} className="popular-movies-img" />
                    <div className="popular-movies-title-section">
                        <h5 className="popular-movies-title moviecard-title">{movie.title}</h5>
                        {/* <h5 className="popular-movies-genres moviecard-genres"><i class="fa-regular fa-film"></i> hi</h5> */}
                    </div>
                </div>
            )}
        />
    );
};

export default PopularMovies;
