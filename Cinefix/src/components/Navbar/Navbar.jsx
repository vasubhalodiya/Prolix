import React from 'react'
import './Navbar.css';
import images from '../../utils/images';
import { Link } from 'react-router-dom';
import NavLink from '../NavLink/NavLink';
import { useState, useEffect } from 'react';


const Navbar = () => {
  const [isSubscribed, setIsSubscribed] = useState(false); // default: not subscribed
  useEffect(() => {
    // ✅ Check from localStorage OR API call
    const subscribedStatus = localStorage.getItem("isSubscribed");

    if (subscribedStatus === "true") {
      setIsSubscribed(true);
    }
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-cnt">
        <div className="navbar-link-list">
          <ul className="navbar-links">
            <NavLink to="/movies" label="Movies" />
            <NavLink to="/series" label="Series" />
            <NavLink to="/tvshows" label="Tv Shows" />
          </ul>
        </div>
        <div className="navbar-profile-section">
          {/* <div className="navbar-subscribe-btn">
            <NavLink to="/subscribe" label="Subscribe" className="button-link"/>
          </div> */}
          {!isSubscribed && (
            <div className="navbar-subscribe-btn">
              <NavLink to="/subscribe" label="Subscribe" className="button-link" />
            </div>
          )}
          <div className="navbar-notification">
            <i className="fa-light fa-bell notification-icon"></i>
            <div className="notification-indication"></div>
          </div>
          <div className="navbar-profile">
            <img src={images.avtar} alt="" />
            <div className="profile-dropdown">
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar