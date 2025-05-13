// import React from 'react'
// import './SubscribeCard.css'
// import Button from '../Button/Button'

// const SubscribeCard = () => {
//   return (
//     <>
//         <div className="subscribe-card">
//             <div className="subscribe-card-cnt">
//                 <div className="subscribe-card-type">
//                     <p className='subscribe-card-type-mode'> Free Trial</p>
//                     <p className='subscribe-card-type-price'>$9.99<span>/Month</span></p>
//                 </div>
//                 <div className="subscribe-card-offer-lists">
//                     <ul className='subscribe-card-offer-list'>
//                         <li className='subscribe-card-offer'>
//                             <div className="subscribe-card-offer-icon">
//                                 <i className="fa-regular fa-check"></i>
//                             </div>
//                             <h6 className='subscribe-card-offer-txt'>Streamin in high quality</h6>
//                             </li>
//                         <li className='subscribe-card-offer'>
//                             <div className="subscribe-card-offer-icon">
//                                 <i className="fa-regular fa-check"></i>
//                             </div>
//                             <h6 className='subscribe-card-offer-txt'>With the best audio quality</h6>
//                             </li>
//                         <li className='subscribe-card-offer'>
//                             <div className="subscribe-card-offer-icon">
//                                 <i className="fa-regular fa-check"></i>
//                             </div>
//                             <h6 className='subscribe-card-offer-txt'>Stream on multiple devices</h6>
//                             </li>
//                         <li className='subscribe-card-offer'>
//                             <div className="subscribe-card-offer-icon">
//                                 <i className="fa-regular fa-check"></i>
//                             </div>
//                             <h6 className='subscribe-card-offer-txt'>Ad-free viewing experience</h6>
//                             </li>
//                         <li className='subscribe-card-offer'>
//                             <div className="subscribe-card-offer-icon">
//                                 <i className="fa-regular fa-check"></i>
//                             </div>
//                             <h6 className='subscribe-card-offer-txt'>Download to watch later</h6>
//                             </li>
//                     </ul>
//                 </div>
//                 <div className="subscribe-card-buy">
//                     <Button variant="outline">Get Started</Button> 
//                 </div>
//             </div>
//         </div>
//     </>
//   )
// }

// export default SubscribeCard
import React from 'react';
import Button from '../Button/Button';
import './SubscribeCard.css';

const SubscribeCard = ({ type, price, features, isActive, onSubscribe }) => {
  return (
    <div className={`subscribe-card ${isActive ? 'active' : ''}`}>
      <div className="subscribe-card-cnt">
        <div className={`subscribe-card-type ${isActive ? 'active' : ''}`}>
          <p className="subscribe-card-type-mode">{type}</p>
          <p className="subscribe-card-type-price">
            {/* ₹{price}<span>/Month</span> */}
            ₹{price}<span>{type === 'Yearly Subscription' ? '/Year' : '/Month'}</span>
          </p>
        </div>
        <div className="subscribe-card-offer-lists">
          <ul className="subscribe-card-offer-list">
            {features.map((feature, index) => (
              <li
                key={index}
                className={`subscribe-card-offer ${!feature.available ? 'disabled' : ''}`}
              >
                <div className={`subscribe-card-offer-icon ${isActive ? 'active' : ''}`}>
                  <i className="fa-solid fa-check"></i>
                </div>
                <h6 className="subscribe-card-offer-txt">{feature.text}</h6>
              </li>
            ))}
          </ul>
        </div>
        {/* Conditionally render the 'Get Started' or 'Buy Now' button */}
        <div className="subscribe-card-buy">
          <Button
            variant={isActive ? 'filled' : 'outline'}
            onClick={() => onSubscribe()}>
            {isActive ? 'Buy Now' : 'Get Started'}
          </Button>

        </div>
      </div>
    </div>
  );
};

export default SubscribeCard;
