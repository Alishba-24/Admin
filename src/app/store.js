import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice.js';
// import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // users: userReducer,
  },
});
