import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../components/Login';
import Admin from '../components/Admin';
import User from '../components/User';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/user" element={<User />} />
    </Routes>
  );
};

export default AppRoutes;
