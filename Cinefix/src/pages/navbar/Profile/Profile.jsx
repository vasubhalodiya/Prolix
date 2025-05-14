import React from 'react';
import './Profile.css';
import { useAuth } from '../../../Auth/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../../Auth/firebase';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
    return null;
  }

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out successfully.");
      navigate("/");
    } catch (error) {
      console.error("Logout error: ", error.message);
    }
  };

  return (
    <div>
      <h2>Welcome, {user.displayName || user.email}</h2>
      <button onClick={handleLogout} className="logout-button">Logout</button>
    </div>
  );
}

export default Profile;
