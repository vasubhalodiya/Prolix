import React from 'react';
import './Navbar.css';
import images from '../../utils/images';
import NavLink from '../NavLink/NavLink';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Auth/AuthContext";
import { Link } from 'react-router-dom';

const Navbar = ({ isTablet, onToggle, isOpen, closeSidebar, showSubscribe }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    if (user) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className={`navbar ${isTablet && isOpen ? "shifted" : ""}`}
      style={{ zIndex: isOpen ? -1 : 999999999999 }}>
      <div className="navbar-cnt">
        {isTablet && (
          <div className="navbar-mobile-header">
            <button className="navbar-toggle-btn" onClick={onToggle}>
              <i className="fa-light fa-sidebar"></i>
            </button>
            <Link to="/">
              <img src={images.logo} alt="cinefix-logo" className='navbar-mobile-logo' />
            </Link>
          </div>
        )}

        {!isTablet && (
          <div className="navbar-link-list">
            <ul className="navbar-links">
              <NavLink to="/movies" label="Movies" />
              <NavLink to="/series" label="Series" />
              <NavLink to="/tvshows" label="Tv Shows" />
            </ul>
          </div>
        )}

        <div className="navbar-profile-section">
          {showSubscribe && (
            <div className="navbar-subscribe-btn">
              <NavLink
                to="/subscribe"
                label="Subscribe"
                className="button-link"
                isSidebar={isTablet && isOpen}
                onClick={isTablet && isOpen ? closeSidebar : undefined}
              />
            </div>
          )}

          {/* <div className="navbar-notification">
            <i className="fa-light fa-bell notification-icon"></i>
            <div className="notification-indication"></div>
          </div> */}

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
