// redux/backpackSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
};

const backpackSlice = createSlice({
  name: 'backpack',
  initialState,
  reducers: {
    addToBackpack: (state, action) => {
      // Check if movie already exists in backpack
      const movieExists = state.movies.find(movie => movie.id === action.payload.id);
      if (!movieExists) {
        state.movies.push(action.payload);
        localStorage.setItem('backpack', JSON.stringify(state.movies)); // Persist backpack to localStorage
      }
    },
    removeFromBackpack: (state, action) => {
      state.movies = state.movies.filter(movie => movie.id !== action.payload.id);
      localStorage.setItem('backpack', JSON.stringify(state.movies)); // Persist after removal
    },
    loadBackpack: (state) => {
      const savedMovies = JSON.parse(localStorage.getItem('backpack')) || [];
      state.movies = savedMovies;
    },
  },
});

export const { addToBackpack, removeFromBackpack, loadBackpack } = backpackSlice.actions;
export default backpackSlice.reducer;
