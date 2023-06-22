import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateFrame } from '../redux/bowlingSlice.js';
import '../css/PinsDown.css';

const PinsDown = () => {
  const dispatch = useDispatch();
  const [remainingPins, setRemainingPins] = useState(10);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [currentRoll, setCurrentRoll] = useState(0);

  const handleClick = (pins) => {
    dispatch(updateFrame({ currentRoll, pins }));
    //special case when we take all 10 pins, on the first roll => strike

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
  // Generate 10 buttons, the number of it representing the value of the pins you broke down
  // in the first round, and the generate a list of buttons with values representing what pins are left for the second

  //remaining pins is the length of array+1, and map, itterates over every element in the array
  //for each element creates a button
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
