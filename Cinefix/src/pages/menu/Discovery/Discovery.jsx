import React from 'react'
import './discovery.css'
import images from '../../../utils/images';
import StudioSlider from '@/components/StudioSlider/StudioSlider';
import Button from '@/components/Button/Button';

const movieStudios = [
  { name: 'Studio 1', image: 'https://img.icons8.com/?size=100&id=V3uqgKkQdUwc&format=png&color=0087FF' },
  { name: 'Studio 2', image: 'https://img.icons8.com/?size=100&id=V3uqgKkQdUwc&format=png&color=0087FF' },
  { name: 'Studio 3', image: 'https://img.icons8.com/?size=100&id=V3uqgKkQdUwc&format=png&color=0087FF' },
  // Add more studios as needed
];

const Discovery = () => {
  return (
    <>
      <div className="discovery">
        <div className="discovery-cnt">
          <div className="disc-header-latest-movie-poster">
            <img src={images.poster} alt="" className='latest-movie-poster-img' />
            <div className="latest-movie-poster-txt">
              <h6 className='movie-type'>Movie</h6> {/*  Movie / Series / Tv Show / Sport */}
              <h1 className='movie-Name'>Doctor Strange</h1>
              <h6 className='movie-episode'>1 Season • 6 Episodes • Marvel</h6>
              <Button variant="iconText" icon="fa-solid fa-play">Play Now</Button>
            </div>
          </div>
          <div className="disc-studios-card">
          <StudioSlider studios={movieStudios} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Discovery