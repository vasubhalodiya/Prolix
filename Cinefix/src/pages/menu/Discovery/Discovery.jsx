import React from 'react'
import './discovery.css'
import images from '../../../utils/images';
import StudioSlider from '@/components/StudioSlider/StudioSlider';

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
          </div>
          <div className="disc-studios-card">
            {/* <Studios /> */}
          </div>
          <StudioSlider studios={movieStudios} />
        </div>
      </div>
    </>
  )
}

export default Discovery