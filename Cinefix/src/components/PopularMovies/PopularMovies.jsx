import React from 'react';
import images from '../../utils/images';
import CommonSlider from '../CommonSlider/CommonSlider';
import './PopularMovies.css';

const popularMoviesData = [
    { id: 1, image: images.galaxy },
    { id: 2, image: images.galaxy },
    { id: 3, image: images.galaxy },
    { id: 4, image: images.galaxy },
    { id: 5, image: images.galaxy },
];

export default function ContinueWatching() {
    return (
        <CommonSlider
            title="Popular Movies"
            data={popularMoviesData}
            renderCard={(item) => (
                <div key={item.id} className="popular-movies-card">
                    <img src={item.image} alt={`Item ${item.id}`} className="popular-movies-img" />
                    <div className="popular-movies-title-section">
                        <h5 className="popular-movies-title moviecard-title">hjdkfjhsdkfuhdkfjhi</h5>
                        <h5 className="popular-movies-genres moviecard-genres"><i class="fa-regular fa-film"></i> hi</h5>
                    </div>
                </div>
            )}
        />
    );
}
