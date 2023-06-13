import React from 'react';
import Frame from './Frame.js';
import Score from './Score.js';
import PinsDown from './PinsDown.js';
import { useSelector } from 'react-redux';
import BowlingSlice from './BowlingSlice.js';

/**
 * 
 * TODO: change generated FRAme loop
 */

const BowlingGame = () => {

  const frames = useSelector((state) => state.bowling.frames);
  const currentFrame = useSelector((state) => state.bowling.currentFrame);
  const currentRoll = useSelector((state) => state.bowling.currentRoll);

  return (
    <div>
      <PinsDown></PinsDown>

      <div className="container1">
        {Array.from({ length: frames.length }).map((_, index) => (
          <Frame frame={index} roll1={currentFrame[0] !== null}
          >
            {index}
          </Frame>
        ))}

      </div>

      {/* <div className="container2">
        <Score></Score>
        <Score></Score>
      </div> */}
    </div>

  );
}
export default BowlingGame;

/**
 * can I update the score?
 * 
 * Can I update the frame triggering it from PinsDown and using redux to keep the state
 * Use selectors to get the info???
 * 
 * yes
 */
