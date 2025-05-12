import React, { useEffect } from 'react';
import './Subscribe.css';
import { Link } from 'react-router-dom';
import images from '../../../utils/images';
import SubscribeCard from '@/components/SubscribeCard/SubscribeCard';


const Subscribe = () => {
  useEffect(() => {
    document.body.classList.add('reset-css');
    return () => {
      document.body.classList.remove('reset-css');
    };
  }, []);

  const plans = [
    {
      type: 'Free Trial',
      price: '0',
      isActive: false,
      features: [
        { text: 'Streaming in high quality', available: true },
        { text: 'With the best audio quality', available: true },
        { text: 'Stream on multiple devices', available: false },
        { text: 'Ad-free viewing experience', available: false },
        { text: 'Download to watch later', available: false },
      ],
    },
    {
      type: 'Monthly Subscription',
      price: '4.99',
      isActive: true,
      features: [
        { text: 'Streaming in high quality', available: true },
        { text: 'With the best audio quality', available: true },
        { text: 'Stream on multiple devices', available: true },
        { text: 'Ad-free viewing experience', available: true },
        { text: 'Download to watch later', available: true },
      ],
    },
    {
      type: 'Yearly Subscription',
      price: '49.99',
      isActive: false,
      features: [
        { text: 'Streaming in high quality', available: true },
        { text: 'With the best audio quality', available: true },
        { text: 'Stream on multiple devices', available: true },
        { text: 'Ad-free viewing experience', available: true },
        { text: 'Download to watch later', available: true },
      ],
    },
  ];

  return (
    <div className="subscribe">
      <div className="subscribe-container">
        <div className="subscribe-heading">
          <Link to="/">
            <img src={images.logo} alt="cinefix-logo" className='logo' />
          </Link>
        </div>
        <div className="subscribe-card-head">
          <p className='subscribe-access-premium'>Access Premium</p>
          <h2 className='subscribe-big-txt'>It's easy to get started</h2>
          <h2 className='subscribe-small-txt'>choose the best plan to enjoy the best movies and series</h2>
        </div>
        <div className="subscribe-section">
          {plans.map((plan, index) => (
            <SubscribeCard key={index} {...plan} />
          ))}
        </div>
        <div className="payment-successfull">
          {/* optional */}
          <Link to="/paymentsuccessfull">Payment Successfull</Link> 
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
