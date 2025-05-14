// EditProfile.jsx
import React, { useState, useEffect } from 'react';
import { updateEmail, updatePassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../Auth/firebase';

function EditProfile() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setEmail(user.email);
      }
    });
    return unsubscribe;
  }, []);

  const handleUpdateEmail = async () => {
    try {
      await updateEmail(user, email);
      alert('Email Updated!');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleUpdatePassword = async () => {
    try {
      await updatePassword(user, password);
      alert('Password Updated!');
    } catch (err) {
      setError(err.message);
    }
  };

  if (!user) {
    return <p>Please login to edit your profile.</p>;
  }

  return (
    <div>
      <h2>Edit Profile</h2>
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Update Email"
        />
        <button onClick={handleUpdateEmail}>Update Email</button>
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Update Password"
        />
        <button onClick={handleUpdatePassword}>Update Password</button>
      </div>
      {error && <p>{error}</p>}
    </div>
  );
}

export default EditProfile;
