import { configureStore } from '@reduxjs/toolkit';
import topRatedMoviesReducer from './topRatedMoviesSlice';
import moviesReducer from './moviesSlice';
import movies from "./reducer/movie"
import { moviesApi } from './action/movie';

export const setupStore = () => {
  return  configureStore({
    reducer: {
      [moviesApi.reducerPath]: moviesApi.reducer,
  
      topRatedMovies: topRatedMoviesReducer,
      movies: movies,
    },
  
     middleware: (getDefaultMiddleware) =>{
      return getDefaultMiddleware()
          .concat(moviesApi.middleware)
     }
          ,
  });
}

export const AppStore = setupStore;
export const AppDispatch = AppStore["dispatch"]
