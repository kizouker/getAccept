import { combineReducers, configureStore } from '@reduxjs/toolkit';
import bowlingReducer from './BowlingSlice.js';

const rootReducer = combineReducers({
  bowling: bowlingReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
