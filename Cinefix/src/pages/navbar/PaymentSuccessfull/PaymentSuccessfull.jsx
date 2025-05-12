import React, { useEffect } from 'react';
import './PaymentSuccessfull.css';
import images from '../../../utils/images';
import { Link } from 'react-router-dom';

const PaymentSuccessfull = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add('reset-css');

    return () => {
      document.body.classList.remove('reset-css');
    };
  }, []);

  return (
    <div className="payment-success">
        <div className="payment-success-heading">
          <Link to="/">
            <img src={images.logo} alt="cinefix-logo" className='logo' />
          </Link>
        </div>
      <div className="payment-success-container">
        <div className="payment-success-img">
          <img src={images.payment_successfull} alt="" />
        </div>
        <div className="payment-success-title">
          <h1 className='payment-success-big-heading section-heading'>Your payment has completed! 🎉</h1>
          <p className='payment-success-paragraph'>Your account is now upgraded with full access to movies, series & more.
            Enjoy seamless, ad-free streaming starting now. 🍿</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessfull;
