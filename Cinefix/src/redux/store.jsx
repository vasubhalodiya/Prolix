import { configureStore } from '@reduxjs/toolkit';
import topRatedMoviesReducer from './topRatedMoviesSlice';

const store = configureStore({
  reducer: {
    topRatedMovies: topRatedMoviesReducer,
  },
});

export default store;
