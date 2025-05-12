// import { configureStore } from '@reduxjs/toolkit';
// import { movieApi } from './movieApi';

// const store = configureStore({
//   reducer: {
//     [movieApi.reducerPath]: movieApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(movieApi.middleware),
// });

// export default store;
// src/redux/store.jsx
// src/redux/store.jsx
import { configureStore } from '@reduxjs/toolkit';
import { movieApi } from './movieApi';
import backpackReducer from './backpackSlice'; // import backpackReducer

const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    backpack: backpackReducer, // add backpackReducer here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});

export default store;
