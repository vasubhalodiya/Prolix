import { configureStore } from '@reduxjs/toolkit';
import commonReducer from './commonReducer';

const store = configureStore({
  reducer: {
    topRatedMovies: commonReducer.topRatedMovies,
    movies: commonReducer.movies,
  },
});

export default store;
