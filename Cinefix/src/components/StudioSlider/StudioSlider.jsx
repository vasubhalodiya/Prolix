// import React, { useState, useRef, useEffect } from 'react';
// import './StudioSlider.css'; 
// import images from '../../utils/images';

// const movieStudios = [
//     { id: 1, image: images.disney },
//     { id: 2, image: images.marvel },
//     { id: 3, image: images.national_geo },
//     { id: 4, image: images.pixar },
//     { id: 5, image: images.star_wars },
//     { id: 6, image: images.hbo },
//     { id: 7, image: images.peacock },
// ];

// export default function StudioSlider() {
//     const [isAtStart, setIsAtStart] = useState(true);
//     const [isAtEnd, setIsAtEnd] = useState(false);
//     const scrollContainerRef = useRef(null);

//     const scroll = (direction) => {
//         scrollContainerRef.current?.scrollBy({
//             left: direction === 'left' ? -300 : 300,
//             behavior: 'smooth'
//         });
//     };

//     useEffect(() => {
//         const checkScrollPosition = () => {
//             const container = scrollContainerRef.current;
//             if (container) {
//                 setIsAtStart(container.scrollLeft <= 10);
//                 setIsAtEnd(container.scrollWidth - container.clientWidth - container.scrollLeft <= 10);
//             }
//         };

//         const container = scrollContainerRef.current;

//         const handleWheel = (event) => {
//             event.preventDefault(); // Prevents default scroll behavior
//             const direction = event.deltaY > 0 ? 'right' : 'left';
//             scroll(direction);
//         };

//         container?.addEventListener('scroll', checkScrollPosition);
//         container?.addEventListener('wheel', handleWheel, { passive: false });
//         checkScrollPosition();

//         return () => {
//             container?.removeEventListener('scroll', checkScrollPosition);
//             container?.removeEventListener('wheel', handleWheel);
//         };
//     }, []);

//     return (
//         <div className="slider-container">
//             <div className="slider-head">
//                 <h2 className="slider-title">Movie Studios</h2>
//                 <div className="slider-btn">
//                     <button
//                         onClick={() => scroll('left')}
//                         className="arrow-button left-arrow"
//                         disabled={isAtStart}><i className="fa-regular fa-arrow-left"></i>
//                     </button>
//                     <button
//                         onClick={() => scroll('right')}
//                         className="arrow-button right-arrow"
//                         disabled={isAtEnd}><i className="fa-regular fa-arrow-right"></i>
//                     </button>
//                 </div>
//             </div>
//             <div className="slider-wrapper">
//                 {!isAtStart && <div className="gradient-overlay left-gradient"></div>}
//                 {!isAtEnd && <div className="gradient-overlay right-gradient"></div>}

//                 <div ref={scrollContainerRef} className="slider-content">
//                     {movieStudios.map((studio) => (
//                         <div key={studio.id} className="studios-card">
//                             <img src={studio.image} alt={`Logo ${studio.id}`} className='studios-img' />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }


import React from 'react';
import images from '../../utils/images';
import CommonSlider from '../CommonSlider/CommonSlider';
import './StudioSlider.css';

const studioData = [
    { id: 1, image: images.disney },
    { id: 2, image: images.marvel },
    { id: 3, image: images.national_geo },
    { id: 4, image: images.pixar },
    { id: 5, image: images.star_wars },
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
