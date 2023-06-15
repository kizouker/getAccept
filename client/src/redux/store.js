import { combineReducers, configureStore } from '@reduxjs/toolkit';
import bowlingReducer from './bowlingSlice.js';
import dataReducer from './dataSlice.js';

const rootReducer = combineReducers({
  bowling: bowlingReducer,
  data: dataReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
