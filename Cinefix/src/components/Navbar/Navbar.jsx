import React from 'react'
import './Navbar.css';
import Button from '../Button/Button'
import images from '../../utils/images';
import { Link } from 'react-router-dom';
import NavLink from '../NavLink/NavLink';

const Navbar = () => {
  return (
    <div className="navbar">
          <div className="navbar-cnt">
            <div className="navbar-link-list">
              <ul className="navbar-links">
                <NavLink to="/movies" label="Movies" />
                <NavLink to="/series" label="Series" />
                <NavLink to="/tvshows" label="Tv Shows" />
                <NavLink to="/sports" label="Sports" />
              </ul>
            </div>
            <div className="navbar-profile-section">
              <div className="navbar-subscribe-btn">
                <Button>Subscribe</Button>
              </div>
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