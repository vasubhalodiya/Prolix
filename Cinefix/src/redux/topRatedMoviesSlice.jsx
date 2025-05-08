import { createSlice } from '@reduxjs/toolkit';

// Slice for top-rated movies
const topRatedMoviesSlice = createSlice({
  name: 'topRatedMovies',
  initialState: {
    movies: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchMoviesStart: (state) => {
      state.loading = true;
    },
    fetchMoviesSuccess: (state, action) => {
      state.loading = false;
      state.movies = action.payload;
    },
    fetchMoviesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Export actions
export const { fetchMoviesStart, fetchMoviesSuccess, fetchMoviesFailure } = topRatedMoviesSlice.actions;

// Export the reducer
export default topRatedMoviesSlice.reducer;
