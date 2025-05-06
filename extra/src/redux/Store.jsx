import { configureStore } from '@reduxjs/toolkit';
import { userApi } from './userApi';

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefault) => getDefault().concat(userApi.middleware),
});
