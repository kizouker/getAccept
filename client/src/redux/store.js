import { configureStore } from '@reduxjs/toolkit';
import bowlingReducer from './BowlingSlice.js';

export const store = configureStore({
  reducer: {
    bowling: bowlingReducer
  }
});
