import React from 'react'
import './TopRatedCard.css'
import images from '../../utils/images';

const TopRatedCard = (props) => {
    return (
        <>
            <div className="top-rated-card">
                <div className="top-rated-card-img-section">
                    <img src={images.mufasa} alt="" className='top-rated-card-img' />
                </div>
                <div className="top-rated-card-txt">
                    <h6 className="top-rated-movie-code">PG-13</h6>
                    <h5 className="top-rated-movie-title">{props.title}</h5>
                    <h6 className="top-rated-movie-mode"><i className="fa-light fa-film"></i> Marvel</h6>
                    <h4 className="top-rated-movie-rating"><i class="fa-solid fa-star"></i>9.2</h4>
                </div>
            </div>
        </>
    )
}

export default TopRatedCard