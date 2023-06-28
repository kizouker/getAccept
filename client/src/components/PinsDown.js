import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateFrame, updateFrameScores } from '../redux/BowlingSlice.js';
import '../css/PinsDown.css';

const PinsDown = () => {
  const dispatch = useDispatch();
  const [remainingPins, setRemainingPins] = useState(10);
  const [frameIndex, setFrameIndex] = useState(0);
  const [currentRoll, setCurrentRoll] = useState(0);

  const handleClick = (pins) => {
    dispatch(updateFrame({ currentRoll, pins }));
    dispatch(updateFrameScores());

    if (frameIndex === 9) {
      setCurrentRoll(currentRoll < 2 ? currentRoll + 1 : 0);
      setRemainingPins(10);
    } else {
      if (pins === 10 || currentRoll === 1) {
        setFrameIndex(frameIndex + 1);
        setCurrentRoll(0);
        setRemainingPins(10);
      } else {
        setCurrentRoll(1);
        setRemainingPins(10 - pins);
      }
    }
  };

  return (
    <div className="pinsDown">
      {Array.from({ length: remainingPins + 1 }).map((_, index) => (
        <button key={index} onClick={() => handleClick(index)}>
          {index}
        </button>
      ))}
    </div>
  );
};

export default PinsDown;
