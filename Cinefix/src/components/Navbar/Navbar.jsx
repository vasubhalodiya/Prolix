// import React, { useEffect, useState } from 'react';
// import './Navbar.css';
// import images from '../../utils/images';
// import NavLink from '../NavLink/NavLink';
// import { useNavigate, Link } from 'react-router-dom';
// import { useAuth } from '../../Auth/AuthContext';

// const Navbar = ({ isTablet, onToggle, isOpen, closeSidebar, showSubscribe }) => {
//   const { user } = useAuth();
//   const navigate = useNavigate();
//   const [isSubscribed, setIsSubscribed] = useState(false);

//   useEffect(() => {
//     const storedStatus = localStorage.getItem('isSubscribed');
//     setIsSubscribed(storedStatus === 'true');
//   }, []);

//   const handleClick = () => {
//     if (user) {
//       navigate("/profile");
//     } else {
//       navigate("/login");
//     }
//   };

//   return (
//     <div
//       className={`navbar ${isTablet && isOpen ? "shifted" : ""}`}
//       style={{ zIndex: isOpen ? -1 : 999999999999 }}
//     >
//       <div className="navbar-cnt">
//         {isTablet && (
//           <div className="navbar-mobile-header">
//             <button className="navbar-toggle-btn" onClick={onToggle}>
//               <i className="fa-light fa-sidebar"></i>
//             </button>
//             <Link to="/">
//               <img src={images.logo} alt="cinefix-logo" className="navbar-mobile-logo" />
//             </Link>
//           </div>
//         )}

//         {!isTablet && (
//           <div className="navbar-link-list">
//             <ul className="navbar-links">
//               <NavLink to="/movies" label="Movies" />
//               <NavLink to="/series" label="Series" />
//               <NavLink to="/tvshows" label="TV Shows" />
//             </ul>
//           </div>
//         )}

//         <div className="navbar-profile-section">
//           {showSubscribe && (
//             <div className={`navbar-subscribe-btn ${isSubscribed ? 'd-none' : ''}`}>
//               <NavLink
//                 to="/subscribe"
//                 label="Subscribe"
//                 className="button-link"
//                 isSidebar={isTablet && isOpen}
//                 onClick={isTablet && isOpen ? closeSidebar : undefined}
//               />
//             </div>
//           )}

//           <div onClick={handleClick} className="navbar-profile">
//             <img src={images.avtar} alt="avatar" />
//             <div className="profile-dropdown">
//               <i className="fa-solid fa-chevron-down"></i>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;




// import React, { useEffect, useState } from 'react';
// import './Navbar.css';
// import images from '../../utils/images';
// import NavLink from '../NavLink/NavLink';
// import { useNavigate, Link } from 'react-router-dom';
// import { useAuth } from '../../Auth/AuthContext';

// const Navbar = ({ isTablet, onToggle, isOpen, closeSidebar, showSubscribe }) => {
//   const { user } = useAuth();
//   const navigate = useNavigate();
//   const [isSubscribed, setIsSubscribed] = useState(false);

//   useEffect(() => {
//     const storedStatus = localStorage.getItem('isSubscribed');
//     setIsSubscribed(storedStatus === 'true');
//   }, []);

//   // Update: Handle Subscribe button click with login check
//   const handleSubscribeClick = (e) => {
//     e.preventDefault();

//     if (!user) {
//       // User not logged in → redirect to login page
//       navigate("/login");
//     } else {
//       // User logged in → proceed to subscribe page
//       navigate("/subscribe");
//     }

//     // Close sidebar if on mobile & sidebar is open
//     if (isTablet && isOpen) {
//       closeSidebar();
//     }
//   };

//   const handleClick = () => {
//     if (user) {
//       navigate("/profile");
//     } else {
//       navigate("/login");
//     }
//   };

//   return (
//     <div
//       className={`navbar ${isTablet && isOpen ? "shifted" : ""}`}
//       style={{ zIndex: isOpen ? -1 : 999999999999 }}
//     >
//       <div className="navbar-cnt">
//         {isTablet && (
//           <div className="navbar-mobile-header">
//             <button className="navbar-toggle-btn" onClick={onToggle}>
//               <i className="fa-light fa-sidebar"></i>
//             </button>
//             <Link to="/">
//               <img src={images.logo} alt="cinefix-logo" className="navbar-mobile-logo" />
//             </Link>
//           </div>
//         )}

//         {!isTablet && (
//           <div className="navbar-link-list">
//             <ul className="navbar-links">
//               <NavLink to="/movies" label="Movies" />
//               <NavLink to="/series" label="Series" />
//               <NavLink to="/tvshows" label="TV Shows" />
//             </ul>
//           </div>
//         )}

//         <div className="navbar-profile-section">
//           {showSubscribe && (
//             <div className={`navbar-subscribe-btn ${isSubscribed ? 'd-none' : ''}`}>
//               <NavLink
//                 to="/subscribe"
//                 label="Subscribe"
//                 className="button-link"
//                 isSidebar={isTablet && isOpen}
//                 onClick={() => {
//                   if (!user) {
//                     navigate('/login');
//                   } else {
//                     navigate('/subscribe');
//                   }
//                   if (isTablet && isOpen) closeSidebar();
//                 }}
//               />
//             </div>
//           )}

//           {/* <div className="navbar-profile-section">
// //           {showSubscribe && (
// //             <div className={`navbar-subscribe-btn ${isSubscribed ? 'd-none' : ''}`}>
// //               <NavLink
// //                 to="/subscribe"
// //                 label="Subscribe"
// //                 className="button-link"
// //                 isSidebar={isTablet && isOpen}
// //                 onClick={isTablet && isOpen ? closeSidebar : undefined}
// //               />
// //             </div>
// //           )} */}


//           <div onClick={handleClick} className="navbar-profile">
//             <img src={images.avtar} alt="avatar" />
//             <div className="profile-dropdown">
//               <i className="fa-solid fa-chevron-down"></i>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React, { useEffect, useState } from 'react';
import './Navbar.css';
import images from '../../utils/images';
import NavLink from '../NavLink/NavLink'; // Keep for other links
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../Auth/AuthContext';

const Navbar = ({ isTablet, onToggle, isOpen, closeSidebar, showSubscribe }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const storedStatus = localStorage.getItem('isSubscribed');
    setIsSubscribed(storedStatus === 'true');
  }, []);

  // Handler for Subscribe button click
  const handleSubscribeClick = (e) => {
    e.preventDefault();

    if (!user) {
      // If user NOT logged in → redirect to login page
      navigate("/login");
    } else {
      // If user logged in → redirect to subscribe page
      navigate("/subscribe");
    }

    // Close sidebar if on mobile and sidebar open
    if (isTablet && isOpen) {
      closeSidebar();
    }
  };

  // Profile click handler: profile or login redirect
  const handleClick = () => {
    if (user) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  return (
    <div
      className={`navbar ${isTablet && isOpen ? "shifted" : ""}`}
      style={{ zIndex: isOpen ? -1 : 999999999999 }}
    >
      <div className="navbar-cnt">
        {isTablet && (
          <div className="navbar-mobile-header">
            <button className="navbar-toggle-btn" onClick={onToggle}>
              <i className="fa-light fa-sidebar"></i>
            </button>
            <Link to="/">
              <img src={images.logo} alt="cinefix-logo" className="navbar-mobile-logo" />
            </Link>
          </div>
        )}

        {!isTablet && (
          <div className="navbar-link-list">
            <ul className="navbar-links">
              <NavLink to="/movies" label="Movies" />
              <NavLink to="/series" label="Series" />
              <NavLink to="/tvshows" label="TV Shows" />
            </ul>
          </div>
        )}

        <div className="navbar-profile-section">
          {showSubscribe && (
            <div className={`navbar-subscribe-btn ${isSubscribed ? 'd-none' : ''}`}>
              <NavLink
                to="/subscribe"
                label="Subscribe"
                className="button-link"
                isSidebar={isTablet && isOpen}
                onClick={handleSubscribeClick}/>
            </div>
          )}

          <div onClick={handleClick} className="navbar-profile" style={{ cursor: "pointer" }}>
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
