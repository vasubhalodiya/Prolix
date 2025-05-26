// import React from 'react'
// import { useEffect } from 'react'
// import './Auth.css'
// import { Link } from 'react-router-dom';
// import images from '../utils/images';
// import { useState } from "react";
// import { auth } from "./firebase";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { toast } from 'react-toastify';

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     document.body.classList.add('reset-css');
//     return () => {
//       document.body.classList.remove('reset-css');
//     };
//   }, []);

//   const handleLogin = async () => {
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       toast.success("Login successful!");
//       navigate("/profile");
//     } catch (error) {
//       toast.error("Invalid Email or Password!");
//     }
//   };

//   return (
//     <>
//       <div className="auth">
//         <div className="auth-content">
//           <div className="auth-heading">
//             <Link to="/">
//               <img src={images.logo} alt="cinefix-logo" className='logo' />
//             </Link>
//           </div>
//           <div className="auth-form">
//             <h2 className='auth-title'>Login</h2>
//             <div className="auth-input-field">
//               <h6 className='auth-input-title'>Email Address</h6>
//               <input type="text" placeholder="Email" className='auth-input' onChange={(e) => setEmail(e.target.value)} />
//             </div>
//             <div className="auth-input-field">
//               <h6 className='auth-input-title'>Password</h6>
//               <input type="password" placeholder="Password" className='auth-input' onChange={(e) => setPassword(e.target.value)} />
//             </div>
//             <button className='auth-btn' onClick={handleLogin}>Login</button>
//             <p className='auth-already-account'>Don't have an account? <Link to="/signup">Signup</Link></p>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Login

import React, { useState, useEffect } from 'react';
import './Auth.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import images from '../utils/images';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";
import { toast } from 'react-toastify';
import { useSelector } from "react-redux";
import { Timestamp } from "firebase/firestore";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        lastLogin: serverTimestamp(),
        subscriptionStatus: 'deactive',
        subscriptionExpiry: Timestamp.fromDate(new Date('2025-05-25'))
      }, { merge: true });

      toast.success("Login successful!");
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Login failed. Please check credentials or network.");
    }
  };

  return (
    <>
      <div className="auth">
        <div className="auth-content">
          <div className="auth-heading">
            <Link to="/">
              <img src={images.logo} alt="cinefix-logo" className='logo' />
            </Link>
          </div>
          <div className="auth-form">
            <h2 className='auth-title'>Login</h2>
            <form onSubmit={handleLogin}>
              <div className="auth-input-field">
                <h6 className='auth-input-title'>Email Address</h6>
                <input
                  type="text"
                  placeholder="Email"
                  className='auth-input'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="auth-input-field">
                <h6 className='auth-input-title'>Password</h6>
                <input
                  type="password"
                  placeholder="Password"
                  className='auth-input'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className='auth-btn' type="submit">Login</button>
            </form>
            <p className='auth-already-account'>
              Don't have an account? <Link to="/signup">Signup</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
