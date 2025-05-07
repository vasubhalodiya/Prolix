import React from 'react'
import './studios.css'
import images from '../../utils/images';

const Studios = () => {
  return (
    <>
        <div className="studios">
            <div className="studios-cnt">
                <button className="studios-card">
                    <img src={images.disney} alt="" className='studios-img' />
                </button>
            </div>
        </div>
    </>
  )
}

export default Studios