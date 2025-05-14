import React, { useState, useEffect } from 'react';
import './Navbar.css';
import images from '../../utils/images';
import NavLink from '../NavLink/NavLink';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Auth/AuthContext";
import Button from '@/components/Button/Button';

const Navbar = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const subscribedStatus = localStorage.getItem("isSubscribed");
    if (subscribedStatus === "true") {
      setIsSubscribed(true);
    }
  }, []);

  const handleClick = () => {
    if (user) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

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
          {!isSubscribed && (
            <div className="navbar-subscribe-btn">
              <NavLink to="/subscribe" label="Subscribe" className="button-link" />
            </div>
          )}
          <div className="navbar-notification">
            <i className="fa-light fa-bell notification-icon"></i>
            <div className="notification-indication"></div>
          </div>

            <div onClick={handleClick} className="navbar-profile">
              <img src={images.avtar} alt="avatar" />
              <div className="profile-dropdown">
                <i className="fa-solid fa-chevron-down"></i>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
