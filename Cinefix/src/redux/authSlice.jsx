// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: localStorage.getItem('isAuthenticated') === 'true', // Fetch from localStorage
  isSubscribed: localStorage.getItem('isSubscribed') === 'true', // Fetch from localStorage (if needed)
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state) => {
      state.isAuthenticated = true;
    },
    logoutSuccess: (state) => {
      state.isAuthenticated = false;
      state.isSubscribed = false;
      localStorage.removeItem('isAuthenticated'); // Clear on logout
      localStorage.removeItem('isSubscribed'); // Clear on logout (if needed)
    },
    subscribeSuccess: (state) => {
      state.isSubscribed = true;
      localStorage.setItem('isSubscribed', 'true'); // Save to localStorage
    },
  },
});

export const { loginSuccess, logoutSuccess, subscribeSuccess } = authSlice.actions;
export default authSlice.reducer;
