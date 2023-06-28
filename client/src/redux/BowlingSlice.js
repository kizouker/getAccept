import { createSlice } from '@reduxjs/toolkit';

export const bowlingSlice = createSlice({
  name: 'bowling',
  initialState: {
    frames: Array.from({ length: 10 }, () => [null, null]),
    framesScore: Array.from({ length: 10 }, () => [null]),
    frameIndex: 0,
    frameScore: 0,
    totalScore: 0,
    maxScore: 0,
    roll: 0
  },
  reducers: {
    updateFrameScores: (state) => {
      let { frameIndex, frames, framesScore } = state;
      //save the current frame score in the array of all frame scores
      // save it in frameScore ? redundant?
      // if roll == 0 => roll =1
      // if roll ==1 => roll = 0
      //except last 10:th frame

      // open frame (not spare or strike)
      framesScore[frameIndex] = sumNonNullValues(frames);
      console.log('frame score: ', framesScore);
      // spare
      // strike
    },
    updateFrame: (state, action) => {
      const { pins } = action.payload;
      let { frameIndex, roll, frames } = state;

      // Update the current roll
      frames[frameIndex][roll] = pins;

      if (frameIndex === 9) {
        state.roll = state.roll < 2 ? state.roll + 1 : 0;
      } else {
        if (pins === 10 || state.roll === 1) {
          frameIndex += 1;
          state.roll = 0;
        } else {
          state.roll = 1;
        }
      }
    }
  }
});

function sumNonNullValues(arr) {
  return arr.reduce((acc, num) => (num !== null ? acc + num : acc), 0);
}

export const { updateFrame, updateFrameScores } = bowlingSlice.actions;

export default bowlingSlice.reducer;
