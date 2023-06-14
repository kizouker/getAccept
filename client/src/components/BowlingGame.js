import React from 'react';
import Frame from './Frame.js';
import Score from './Score.js';
import PinsDown from './PinsDown.js';
import { useSelector } from 'react-redux';

const BowlingGame = () => {
  const frames = useSelector((state) => state.bowling.frames);

  return (
    <div>
      <PinsDown></PinsDown>

      <div className="frameContainer">
        {Array.from({ length: frames.length }).map((_, index) => (
          <Frame key={index} frame={index}>
            {index}
          </Frame>
        ))}

        <Score></Score>
      </div>
    </div>
  );
};
export default BowlingGame;

/**
 * can I update the score?
 *
 * Can I update the frame triggering it from PinsDown and using redux to keep the state
 * Use selectors to get the info???
 *
 * yes
 */
