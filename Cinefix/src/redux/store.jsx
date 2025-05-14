import { configureStore } from '@reduxjs/toolkit';
import { movieApi } from './movieApi';
import backpackReducer from './backpackSlice';
// import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    backpack: backpackReducer,
    // auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});

export default store;
