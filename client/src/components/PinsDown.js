import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateFrame } from '../redux/BowlingSlice.js';
import '../css/PinsDown.css';

const PinsDown = () => {
  const dispatch = useDispatch();
  const [remainingPins, setRemainingPins] = useState(10);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [currentRoll, setCurrentRoll] = useState(0);

  const handleClick = (pins) => {
    dispatch(updateFrame({ currentRoll, pins }));

    if (currentFrame === 9) {
      setCurrentRoll(currentRoll < 2 ? currentRoll + 1 : 0);
      setRemainingPins(10);
    } else {
      if (pins === 10 || currentRoll === 1) {
        setCurrentFrame(currentFrame + 1);
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
