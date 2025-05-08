import React from 'react'
import './discovery.css'
import images from '../../../utils/images';
import StudioSlider from '@/components/StudioSlider/StudioSlider';
import Button from '@/components/Button/Button';
import ContinueWatching from '@/components/ContinueWatching/ContinueWatching';

const Discovery = () => {
  return (
    <>
      <div className="discovery">
        <div className="discovery-cnt">
          <div className="disc-header-latest-movie-poster">
            <img src={images.poster} alt="" className='latest-movie-poster-img' />
            <div className="latest-movie-poster-txt">
              <div className="latest-movie-poster-txt-title">
                <h6 className='movie-type'>Movie</h6> {/*  Movie / Series / Tv Show / Sport */}
                <h1 className='movie-name'>Doctor Strange</h1>
                <h6 className='movie-episode'>1 Season • 6 Episodes • Marvel</h6>
              </div>
              <div className="latest-movie-poster-txt-btns">
                <Button variant="iconText" icon="fa-light fa-clapperboard-play" style={{ color: 'green' }}>Watch Now</Button>
                <Button variant="text" icon="fa-light fa-backpack">Add Backpack</Button>
              </div>
            </div>
          </div>
          <div className="disc-studios-card">
          <StudioSlider />
          </div>
          <ContinueWatching />
        </div>
      </div>
    </>
  )
}

export default Discovery