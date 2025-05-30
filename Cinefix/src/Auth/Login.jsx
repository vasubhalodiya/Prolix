import React, { useState, useEffect } from 'react';
import './Auth.css';
import { Link, useNavigate } from 'react-router-dom';
import images from '../utils/images';
import { auth } from "./firebase";
import { db } from "./firebase";
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Timestamp } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password); //signInWithEmailAndPassword thi user ne login karva dese
      const user = userCredential.user;
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        const today = new Date();
        await setDoc(userRef, {
          email: user.email,
          lastLogin: serverTimestamp(),
          subscriptionStatus: 'deactive',
          subscriptionExpiry: Timestamp.fromDate(today)
        }, { merge: true });
      } else {
        await setDoc(userRef, {
          lastLogin: serverTimestamp()
        }, { merge: true });
      }

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
                  onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="auth-input-field">
                <h6 className='auth-input-title'>Password</h6>
                <input
                  type="password"
                  placeholder="Password"
                  className='auth-input'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <button className='auth-btn' type="submit" onKeyDown={(e) => {
                if (e.key === "Enter") 
                {
                  handleLogin();
                }
                }}>Login</button>
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
