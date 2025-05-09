import React from 'react';
import images from '../../utils/images';
import CommonSlider from '../CommonSlider/CommonSlider';
import './StudioSlider.css';

const studioData = [
    { id: 1, image: images.disney },
    { id: 2, image: images.marvel },
    { id: 3, image: images.pixar },
    { id: 4, image: images.star_wars },
    { id: 5, image: images.national_geo },
    { id: 6, image: images.hbo },
    { id: 7, image: images.peacock },
];

export default function StudioSlider() {
    return (
        <CommonSlider
            title="Movie Studios"
            data={studioData}
            renderCard={(studio) => (
                <div key={studio.id} className="studios-card">
                    <img src={studio.image} alt={`Logo ${studio.id}`} className="studios-img" />
                </div>
            )}
        />
    );
}
