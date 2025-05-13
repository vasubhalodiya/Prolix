import React, { useEffect, useState } from 'react';
import './PaymentSuccessfull.css';
import images from '../../../utils/images';
import { Link, useNavigate } from 'react-router-dom';

const PaymentSuccessfull = () => {
  const [timer, setTimer] = useState(3);
  const navigate = useNavigate();

  const isSubscribed = false;

  useEffect(() => {
    if (isSubscribed) {
      navigate('/');
    }
  }, [isSubscribed, navigate]);

  useEffect(() => {
    if (timer === 0) {
      navigate('/premium');
      return;
    }

    const countdown = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(countdown);
  }, [timer, navigate]);

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
          <img src={images.logo} alt="cinefix-logo" className="logo" />
        </Link>
      </div>
      <div className="payment-success-container">
        <div className="payment-success-img">
          <img src={images.payment_successfull} alt="payment success" />
        </div>
        <div className="payment-success-title">
          <h1 className="payment-success-big-heading section-heading">
            Your payment has completed! 🎉
          </h1>
          <p className="payment-success-paragraph">
            Your account is now upgraded with full access to movies, series & more.
            Enjoy seamless, ad-free streaming starting now. 🍿
          </p>
        </div>
        <div className="payment-success-btn">
          <p>Redirecting in: <span id="timer">{timer}</span> seconds</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessfull;
