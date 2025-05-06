import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import { userApi } from './userApi'

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware)
})

export default store