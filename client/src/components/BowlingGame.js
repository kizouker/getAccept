import React from 'react';
import Frame from './Frame.js';
import PinsDown from './PinsDown.js';
import { useSelector } from 'react-redux';
import Score from './Score.js';

const BowlingGame = () => {
  const frames = useSelector((state) => state.bowling.frames);

  return (
    <div>
      <PinsDown></PinsDown>
      <div className="frameContainer">
        {Array.from({ length: frames.length }).map((_, index) => (
          <Frame key={index} frameIndex={index}>
            {index}
          </Frame>
        ))}
        <Score></Score>
      </div>
    </div>
  );
};

export default BowlingGame;
