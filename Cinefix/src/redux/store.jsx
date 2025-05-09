import { configureStore } from '@reduxjs/toolkit';
import topRatedMoviesReducer from './topRatedMoviesSlice';
import moviesReducer from './moviesSlice';

const store = configureStore({
  reducer: {
    topRatedMovies: topRatedMoviesReducer,
    movies: moviesReducer,
  },
});

export default store;
