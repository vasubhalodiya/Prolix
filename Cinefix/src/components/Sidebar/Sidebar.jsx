// import React from 'react'
// import './Sidebar.css';
// import Navbar from '../Navbar/Navbar';
// import images from '@/utils/Images';
// import { Link } from 'react-router-dom';
// import NavLink from '../NavLink/NavLink';

// const Sidebar = () => {
//   return (
//     <>
//       <div className="sidebar">
//         <div className="sidebar-cnt">
//           <div className="sidebar-logo">
//             <img src={images.logo} alt="cinefix-logo" className='logo' />
//           </div>
//           <div className="sidebar-list">
//             <div className="sidebar-list-group">
//               <div className="sidebar-title">
//                 <h6>MENU</h6>
//               </div>
//               <div className="sidebar-link-list">
//                 <ul className="sidebar-links">
//                 <NavLink to="/" iconClass="fa-regular fa-compass" label="Discovery" isSidebar={true} />
//                 <NavLink to="/search" iconClass="fa-regular fa-magnifying-glass" label="Search" isSidebar={true} />
//                 <NavLink to="/toprated" iconClass="fa-regular fa-star" label="Top Rated" isSidebar={true} />
//                 <NavLink to="/premium" iconClass="fa-regular fa-crown" label="Premium" isSidebar={true} />
//                 </ul>
//               </div>
//             </div>
//             <div className="sidebar-list-group">
//               <div className="sidebar-title">
//                 <h6>LIBRARY</h6>
//               </div>
//               <div className="sidebar-link-list">
//                 <ul className="sidebar-links">
//                 <NavLink to="/mybackpack" iconClass="fa-light fa-backpack" label="My Backpack" isSidebar={true} />
//                 <NavLink to="/setting" iconClass="fa-regular fa-gear" label="Setting" isSidebar={true} />
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Navbar />
//     </>
//   )
// }

// export default Sidebar



// import React, { useState, useEffect } from 'react';
// import './Sidebar.css';
// import Navbar from '../Navbar/Navbar';
// import images from '@/utils/Images';
// import NavLink from '../NavLink/NavLink';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isTablet, setIsTablet] = useState(window.innerWidth < 1240);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   // Handle screen resize
//   useEffect(() => {
//     const handleResize = () => {
//       setIsTablet(window.innerWidth < 1240);
//       if (window.innerWidth >= 1240) {
//         setIsOpen(false); // reset state on large screen
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <>
//       <div className={`sidebar ${isTablet && isOpen ? 'open' : ''}`}>
//         <div className="sidebar-cnt">
//           <div className="sidebar-logo">
//             <img src={images.logo} alt="cinefix-logo" className='logo' />
//           </div>
//           <div className="sidebar-list">
//             <div className="sidebar-list-group">
//               <div className="sidebar-title">
//                 <h6>MENU</h6>
//               </div>
//               <div className="sidebar-link-list">
//                 <ul className="sidebar-links">
//                   <NavLink to="/" iconClass="fa-regular fa-compass" label="Discovery" isSidebar={true} />
//                   <NavLink to="/search" iconClass="fa-regular fa-magnifying-glass" label="Search" isSidebar={true} />
//                   <NavLink to="/toprated" iconClass="fa-regular fa-star" label="Top Rated" isSidebar={true} />
//                   <NavLink to="/premium" iconClass="fa-regular fa-crown" label="Premium" isSidebar={true} />
//                 </ul>
//               </div>
//             </div>
//             <div className="sidebar-list-group">
//               <div className="sidebar-title">
//                 <h6>LIBRARY</h6>
//               </div>
//               <div className="sidebar-link-list">
//                 <ul className="sidebar-links">
//                   <NavLink to="/mybackpack" iconClass="fa-light fa-backpack" label="My Backpack" isSidebar={true} />
//                   <NavLink to="/setting" iconClass="fa-regular fa-gear" label="Setting" isSidebar={true} />
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Toggle Button - only show on tablets */}
//       {isTablet && (
//         <button
//           className={`sidebar-toggle-btn ${isOpen ? 'open' : ''}`}
//           onClick={toggleSidebar}
//         >
//           <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
//         </button>
//       )}

//       <Navbar />
//     </>
//   );
// };

// export default Sidebar;


// import React, { useState, useEffect } from 'react';
// import './Sidebar.css';
// import images from '@/utils/Images';
// import NavLink from '../NavLink/NavLink';
// import Navbar from '../Navbar/Navbar';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isTablet, setIsTablet] = useState(window.innerWidth < 1240);

//   useEffect(() => {
//     const handleResize = () => {
//       const tablet = window.innerWidth < 1240;
//       setIsTablet(tablet);
//       if (!tablet) setIsOpen(false);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <div className={`sidebar ${isTablet && isOpen ? 'open' : ''}`}>
//         <div className="sidebar-cnt">
//           <div className="sidebar-logo">
//             <img src={images.logo} alt="cinefix-logo" className='logo' />
//           </div>
//           <div className="sidebar-list">
//             <div className="sidebar-list-group">
//               <div className="sidebar-title"><h6>Menu</h6></div>
//               <div className="sidebar-link-list">
//                 <ul className="sidebar-links">
//                   <NavLink to="/" iconClass="fa-regular fa-compass" label="Discovery" isSidebar={true} />
//                   <NavLink to="/search" iconClass="fa-regular fa-magnifying-glass" label="Search" isSidebar={true} />
//                   <NavLink to="/toprated" iconClass="fa-regular fa-star" label="Top Rated" isSidebar={true} />
//                   <NavLink to="/premium" iconClass="fa-regular fa-crown" label="Premium" isSidebar={true} />
//                 </ul>
//               </div>
//             </div>

//             {isTablet && isOpen && (
//               <div className="sidebar-top-menu">
//                 <div className="sidebar-list-group">
//                   <div className="sidebar-title"><h6>STREAMING</h6></div>
//                   <div className="sidebar-link-list">
//                     <ul className="sidebar-links">
//                       <NavLink to="/movies" iconClass="fa-regular fa-clapperboard-play" label="Movies" isSidebar={true} />
//                       <NavLink to="/series" iconClass="fa-regular fa-popcorn" label="Series" isSidebar={true} />
//                       <NavLink to="/tvshows" iconClass="fa-regular fa-tv" label="Tv Shows" isSidebar={true} />
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             )}

//             <div className="sidebar-list-group">
//               <div className="sidebar-title"><h6>LIBRARY</h6></div>
//               <div className="sidebar-link-list">
//                 <ul className="sidebar-links">
//                   <NavLink to="/mybackpack" iconClass="fa-light fa-backpack" label="My Backpack" isSidebar={true} />
//                   <NavLink to="/setting" iconClass="fa-regular fa-gear" label="Setting" isSidebar={true} />
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Navbar isTablet={isTablet} onToggle={toggleSidebar} />
//     </>
//   );
// };

// export default Sidebar;
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
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    console.log("Sidebar toggled - isOpen:", !isOpen); // ✅ Debug line
  };

  return (
    <>
      <div className={`sidebar ${isTablet && isOpen ? 'open' : ''}`}>
        <div className="sidebar-cnt">
          <div className="sidebar-logo">
            <img src={images.logo} alt="cinefix-logo" className='logo' />
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

      {console.log("isTablet:", isTablet, "| isOpen:", isOpen)}

      <Navbar isTablet={isTablet} isOpen={isOpen} onToggle={toggleSidebar} />

    </>
  );
};

export default Sidebar;
