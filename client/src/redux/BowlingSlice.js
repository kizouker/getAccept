import { createSlice } from '@reduxjs/toolkit';

export const bowlingSlice = createSlice({
  name: 'bowling',
  initialState: {
    frames: Array.from({ length: 10 }, () => [null, null]),
    currentFrame: 0,
    totalScore: 0,
    maxScore: 0,
    currentRoll: 0
  },
  reducers: {
    updateFrame: (state, action) => {
      const { pins } = action.payload;

      // Update the current roll
      state.frames[state.currentFrame][state.currentRoll] = pins;

      if (state.currentFrame === 9) {
        state.currentRoll = state.currentRoll < 2 ? state.currentRoll + 1 : 0;
      } else {
        if (pins === 10 || state.currentRoll === 1) {
          state.currentFrame += 1;
          state.currentRoll = 0;
        } else {
          state.currentRoll = 1;
        }
      }
    }
  }
});

export const { updateFrame } = bowlingSlice.actions;

export default bowlingSlice.reducer;
