import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import images from '@/utils/Images';
import NavLink from '../NavLink/NavLink';
import Navbar from '../Navbar/Navbar';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTablet, setIsTablet] = useState(window.innerWidth < 1240);

  useEffect(() => {
    const handleResize = () => {
      const tablet = window.innerWidth < 1240;
      setIsTablet(tablet);
      if (!tablet) setIsOpen(false);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      <div className={`sidebar ${isTablet && isOpen ? 'open' : ''}`}>
        <div className="sidebar-cnt">
          <div className="sidebar-logo">
            <img src={images.logo} alt="cinefix-logo" className='logo' />
            {/* Cross button visible only when sidebar is open on tablet */}
            {isTablet && isOpen && (
              <button className="sidebar-close-btn" onClick={closeSidebar} aria-label="Close Sidebar">
                <i className="fa-light fa-sidebar"></i>
              </button>
            )}
          </div>
          <div className="sidebar-list">
            <div className="sidebar-list-group">
              <div className="sidebar-title"><h6>Menu</h6></div>
              <div className="sidebar-link-list">
                <ul className="sidebar-links">
                  <NavLink to="/" iconClass="fa-regular fa-compass" label="Discovery" isSidebar={true} />
                  <NavLink to="/search" iconClass="fa-regular fa-magnifying-glass" label="Search" isSidebar={true} />
                  <NavLink to="/toprated" iconClass="fa-regular fa-star" label="Top Rated" isSidebar={true} />
                  <NavLink to="/premium" iconClass="fa-regular fa-crown" label="Premium" isSidebar={true} />
                </ul>
              </div>
            </div>

            {isTablet && isOpen && (
              <div className="sidebar-top-menu">
                <div className="sidebar-list-group">
                  <div className="sidebar-title"><h6>STREAMING</h6></div>
                  <div className="sidebar-link-list">
                    <ul className="sidebar-links">
                      <NavLink to="/movies" iconClass="fa-regular fa-clapperboard-play" label="Movies" isSidebar={true} />
                      <NavLink to="/series" iconClass="fa-regular fa-popcorn" label="Series" isSidebar={true} />
                      <NavLink to="/tvshows" iconClass="fa-regular fa-tv" label="Tv Shows" isSidebar={true} />
                    </ul>
                  </div>
                </div>
              </div>
            )}

            <div className="sidebar-list-group">
              <div className="sidebar-title"><h6>LIBRARY</h6></div>
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

      <Navbar isTablet={isTablet} onToggle={toggleSidebar} isOpen={isOpen} />

      {isTablet && isOpen && (
        <div
          className="sidebar-overlay"
          onClick={closeSidebar}
          role="button"
          tabIndex={0}
          aria-label="Close Sidebar"
          onKeyDown={(e) => { if (e.key === 'Escape') closeSidebar(); }}
        />
      )}
    </>
  );
};

export default Sidebar;
