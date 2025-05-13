import React from 'react'
import './ComingSoonMovies.css'
import images from '../../utils/images';
import CommonSlider from '../CommonSlider/CommonSlider';
import Button from '../Button/Button';

const comingSoonData = [
    { id: 1, image: images.galaxy, title: "Movie 1", genres: "Action, Adventure" },
    { id: 2, image: images.galaxy, title: "Movie 1" },
    { id: 3, image: images.galaxy, title: "Movie 1" },
    { id: 4, image: images.galaxy, title: "Movie 1" },
    { id: 5, image: images.galaxy, title: "Movie 1" },
];

const ComingSoonMovies = () => {
    return (
        <>
            <CommonSlider
                title="Coming Soon"
                data={comingSoonData}
                renderCard={(item) => (
                    <>
                        <div key={item.id} className="coming-soon-movie-poster">
                            <img src={images.dr_strange} alt="" className='coming-soon-poster-img' />
                            <div className="coming-soon-poster-txt">
                                <div className="coming-soon-poster-txt-title">
                                    <h6 className='movie-type'>Coming Soon</h6>
                                    <h1 className='movie-name'>Doctor Strange</h1>
                                    <h6 className='movie-episode'>On December, 2025</h6>
                                </div>
                                <div className="coming-soon-poster-txt-btns">
                                    <Button variant="outline" icon="fa-light fa-clapperboard-play" style={{ color: 'green' }}>Watch Now</Button>
                                </div>
                            </div>
                        </div>
                        
                    </>
                )}
            />
        </>
    )
}

export default ComingSoonMovies