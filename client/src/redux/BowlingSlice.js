import { createSlice } from '@reduxjs/toolkit';

const bowlingSlice = createSlice({
  name: 'bowling',
  initialState: {
    frames: Array(10).fill([null, null]),
    currentFrame: 0,
    currentRoll: 0,
    currentScore: 0,
    totalScore: 0,
    maxScore: 0
  },
  reducers: {
    updateFrame: (state, action) => {
      const { pins } = action.payload;

      // Update the current roll
      state.frames[state.currentFrame][state.currentRoll] = pins;

      //special case - last fram - has three rolls
      // if(state.currentFrame === 9)

      // If a strike was scored or it was the second roll, move to the next frame
      if (state.currentFrame < 9 && (pins === 10 || state.currentRoll === 1)) {
        state.currentFrame += 1;
        state.currentRoll = 0;
      } else {
        // Otherwise, prepare for the second roll
        state.currentRoll = 1;
      }
    }
  }
});

export const { updateFrame } = bowlingSlice.actions;

export default bowlingSlice.reducer;
