import { createSlice } from '@reduxjs/toolkit';

// Slice for movies
const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
      movies: [],
      isLoading: false,
      error: null,
    },
    reducers: {
      fetchMoviesStart(state) {
        state.isLoading = true;
      },
      fetchMoviesSuccess(state, action) {
        state.isLoading = false;
        state.movies = action.payload; // Ensure payload is an array of movie data
      },
      fetchMoviesFailure(state, action) {
        state.isLoading = false;
        state.error = action.payload;
      },
    },
  });
  
export const { fetchMoviesStart, fetchMoviesSuccess, fetchMoviesFailure } = moviesSlice.actions;

export default moviesSlice.reducer;



























