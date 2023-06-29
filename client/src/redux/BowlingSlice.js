import { createSlice } from '@reduxjs/toolkit';

export const bowlingSlice = createSlice({
  name: 'bowling',
  initialState: {
    frames: Array.from({ length: 10 }, () => [null, null]),
    framesScore: Array.from({ length: 10 }, () => [null]),
    frameIndex: 0,
    totalScore: 0,
    maxScore: 0,
    roll: 0
  },
  reducers: {
    updateFrameScores: (state, action) => {
      let { frames, framesScore } = state;
      let { frameIndex } = action.payload;
      // frameIndex here is -1 from the one in state and updateFrame
      /**** should I really need to pass frameIndex in the payload here? I don't use it
       * the state in redux should be enough?**/
      framesScore[frameIndex] = sumNonNullValues(frames[frameIndex]);
    },
    updateFrame: (state, action) => {
      let { frames } = state;
      let { frameIndex, roll, pins } = action.payload;
      state.frameIndex = frameIndex;
      state.roll = roll;
      frames[state.frameIndex][state.roll] = pins;

      if (frameIndex === 9) {
        state.roll = state.roll < 2 ? state.roll + 1 : 0;
      } else {
        if (pins === 10 || state.roll === 1) {
          state.frameIndex += 1;
          state.roll = 0;
        } else {
          state.roll = 1;
        }
      }
      console.log('Slice, frameIndex: ' + frameIndex);
      console.log('Slice, state.frameIndex: ' + state.frameIndex);
      console.log('Slice: state.roll: ' + state.roll);
      console.log('Slice: roll: ' + roll);

      /** now I pass the roll from the component in the action payload
       * = I get the sum, right, before the roll was not set for roll 1
       */
    }
  }
});

function sumNonNullValues(arr) {
  return arr.reduce((acc, num) => (num !== null ? acc + num : acc), 0);
}

export const { updateFrame, updateFrameScores } = bowlingSlice.actions;

export default bowlingSlice.reducer;
