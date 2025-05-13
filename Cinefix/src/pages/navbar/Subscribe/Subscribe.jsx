import React, { useEffect, useState } from 'react';
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

  const handlePayment = async (amount) => {
    console.log("Payment initiated for amount:", amount); // Debug
    try {
      const res = await fetch("http://localhost:5000/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ amount }) // <- important
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to create order");

      const options = {
        key: "rzp_test_f72l5fnGjUGpvZ",
        amount: data.amount,
        currency: "INR",
        name: "Cinefix",
        description: "Subscription Payment",
        order_id: data.id,
        handler: function (response) {
          console.log("Payment successful!", response);
          // redirect or toast
        },
        prefill: {
          name: "Vasu",
          email: "vasu@example.com",
          contact: "9999999999"
        },
        theme: {
          color: "#121212"
        }
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Error in payment flow:", error);
    }
  };

  const plans = [
    {
      type: 'Free Trial',
      price: '0',
      isActive: false, // Set to false as per requirement
      amountInINR: 0,
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
      isActive: true, // This plan will be static and active by default
      amountInINR: 499,
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
      isActive: false, // Set to false as per requirement
      amountInINR: 4999,
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
          <h2 className='subscribe-small-txt'>Choose the best plan to enjoy the best movies and series</h2>
        </div>
        <div className="subscribe-section">
          {plans.map((plan, index) => (
            <SubscribeCard
              key={index}
              type={plan.type}
              price={plan.price}
              features={plan.features}
              isActive={plan.isActive} // Directly pass the isActive prop as true/false
              onSubscribe={() => handlePayment(plan.amountInINR)} // Handle subscription payment directly
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
