import React from 'react'
import './Sidebar.css';
import Navbar from '../Navbar/Navbar';
import images from '../../utils/images';


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
                  <a href="#">
                    <li className="sidebar-link">
                      <i className="fa-regular fa-compass"></i>Discovery
                    </li>
                  </a>
                  <a href="#">
                    <li className="sidebar-link">
                      <i className="fa-regular fa-magnifying-glass"></i>Search
                    </li>
                  </a>
                  <a href="#">
                    <li className="sidebar-link">
                      <i className="fa-regular fa-layer-group"></i>Category
                    </li>
                  </a>
                  <a href="#">
                    <li className="sidebar-link">
                      <i className="fa-regular fa-star"></i>Top Rated
                    </li>
                  </a>
                </ul>
              </div>
            </div>
            <div className="sidebar-list-group">
              <div className="sidebar-title">
                <h6>LIBRARY</h6>
              </div>
              <div className="sidebar-link-list">
                <ul className="sidebar-links">
                  <a href="#">
                    <li className="sidebar-link">
                      <i className="fa-light fa-backpack"></i>My Backpack
                    </li>
                  </a>
                  <a href="#">
                    <li className="sidebar-link">
                      <i className="fa-regular fa-download"></i>Download
                    </li>
                  </a>
                  <a href="#">
                    <li className="sidebar-link">
                      <i className="fa-regular fa-gear"></i>Setting
                    </li>
                  </a>
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