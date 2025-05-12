// src/redux/backpackSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
};

const backpackSlice = createSlice({
  name: 'backpack',
  initialState,
  reducers: {
    addToBackpack: (state, action) => {
      const existing = state.movies.find((m) => m.id === action.payload.id);
      if (!existing) {
        state.movies.push(action.payload);
      }
    },
    removeFromBackpack: (state, action) => {
      state.movies = state.movies.filter((m) => m.id !== action.payload.id);
    },
  },
});

export const { addToBackpack, removeFromBackpack } = backpackSlice.actions;
export default backpackSlice.reducer;
