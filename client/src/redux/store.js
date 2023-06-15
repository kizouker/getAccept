import { configureStore } from '@reduxjs/toolkit';
import bowlingReducer from './bowlingSlice.js';

export const store = configureStore({
  reducer: {
    bowling: bowlingReducer
  }
});
