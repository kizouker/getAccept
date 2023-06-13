import { configureStore } from '@reduxjs/toolkit';
import bowlingReducer from './BowlingSlice.js';

export const Store = configureStore({
  reducer: {
    bowling: bowlingReducer,
  },
});
