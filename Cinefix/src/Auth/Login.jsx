import React from 'react'
import { useEffect } from 'react'
import './Auth.css'
import { Link } from 'react-router-dom';
import images from '../utils/images';
import { useState } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('reset-css');
    return () => {
      document.body.classList.remove('reset-css');
    };
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      navigate("/profile");
    } catch (error) {
      alert(error.message);
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
            <div className="auth-input-field">
              <h6 className='auth-input-title'>Email Address</h6>
              <input type="text" placeholder="Email" className='auth-input' onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="auth-input-field">
              <h6 className='auth-input-title'>Password</h6>
              <input type="password" placeholder="Password" className='auth-input' onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className='auth-btn' onClick={handleLogin}>Login</button>
            <p className='auth-already-account'>Don't have an account? <Link to="/signup">Signup</Link></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login