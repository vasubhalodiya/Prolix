// import React, { useState, useRef, useEffect } from 'react';
// import './ContinueWatching.css';
// import images from '../../utils/images';

// const conWatch = [
//     { id: 1, image: images.galaxy },
//     { id: 2, image: images.galaxy },
//     { id: 3, image: images.galaxy },
//     { id: 4, image: images.galaxy },
//     { id: 5, image: images.galaxy },
//     { id: 6, image: images.galaxy },
//     { id: 7, image: images.galaxy },
// ];

// export default function ContinueWatching() {
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
//             event.preventDefault();
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
//                 <h2 className="slider-title">Continue Watching</h2>
//                 <div className="slider-btn">
//                     <button
//                         onClick={() => scroll('left')}
//                         className="arrow-button left-arrow"
//                         disabled={isAtStart}>
//                         <i className="fa-regular fa-arrow-left"></i>
//                     </button>
//                     <button
//                         onClick={() => scroll('right')}
//                         className="arrow-button right-arrow"
//                         disabled={isAtEnd}>
//                         <i className="fa-regular fa-arrow-right"></i>
//                     </button>
//                 </div>
//             </div>
//             <div className="slider-wrapper">
//                 {!isAtStart && <div className="gradient-overlay left-gradient"></div>}
//                 {!isAtEnd && <div className="gradient-overlay right-gradient"></div>}

//                 <div ref={scrollContainerRef} className="slider-content">
//                     {conWatch.map((conWatch) => (
//                         <div key={conWatch.id} className="popular-movies-card">
//                             <img src={conWatch.image} alt={`Logo ${conWatch.id}`} className='popular-movies-img' />
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
