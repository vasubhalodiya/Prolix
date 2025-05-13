import React from 'react'
import './Sidebar.css';
import Navbar from '../Navbar/Navbar';
import images from '@/utils/Images';
import { Link } from 'react-router-dom';
import NavLink from '../NavLink/NavLink';

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-cnt">
          <div className="sidebar-logo">
            <img src={images.logo} alt="cinefix-logo" className='logo' />
          </div>
          <div className="sidebar-list">
            <div className="sidebar-list-group">
              <div className="sidebar-title">
                <h6>MENU</h6>
              </div>
              <div className="sidebar-link-list">
                <ul className="sidebar-links">
                <NavLink to="/" iconClass="fa-regular fa-compass" label="Discovery" isSidebar={true} />
                <NavLink to="/search" iconClass="fa-regular fa-magnifying-glass" label="Search" isSidebar={true} />
                <NavLink to="/toprated" iconClass="fa-regular fa-star" label="Top Rated" isSidebar={true} />
                <NavLink to="/premium" iconClass="fa-regular fa-crown" label="Premium" isSidebar={true} />
                </ul>
              </div>
            </div>
            <div className="sidebar-list-group">
              <div className="sidebar-title">
                <h6>LIBRARY</h6>
              </div>
              <div className="sidebar-link-list">
                <ul className="sidebar-links">
                <NavLink to="/mybackpack" iconClass="fa-light fa-backpack" label="My Backpack" isSidebar={true} />
                <NavLink to="/setting" iconClass="fa-regular fa-gear" label="Setting" isSidebar={true} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  )
}

export default Sidebar