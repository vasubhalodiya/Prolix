import { createSlice } from '@reduxjs/toolkit';

// Function to create a slice for any type of movie list (e.g., Movies, TopRatedMovies)
const createMovieSlice = (sliceName) => {
  return createSlice({
    name: sliceName,
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
        state.movies = action.payload; // Payload should be an array of movies
      },
      fetchMoviesFailure(state, action) {
        state.isLoading = false;
        state.error = action.payload;
      },
    },
  });
};

// Create slices for both movies and top-rated movies
const topRatedMoviesSlice = createMovieSlice('topRatedMovies');
const moviesSlice = createMovieSlice('movies');
const seriesSlice = createMovieSlice('series');

// Export actions for both slices
export const { fetchMoviesStart, fetchMoviesSuccess, fetchMoviesFailure } = {
  ...moviesSlice.actions,
  ...topRatedMoviesSlice.actions,
  ...seriesSlice.actions,
};

// Export reducers for both slices
export default {
  movies: moviesSlice.reducer,
  topRatedMovies: topRatedMoviesSlice.reducer,
  topRatedMovies: seriesSlice.reducer,
};
