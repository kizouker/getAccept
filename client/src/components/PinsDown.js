import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateFrame } from '../redux/bowlingSlice.js';
import '../css/PinsDown.css';

const PinsDown = () => {
  const dispatch = useDispatch();
  const [roll, setRoll] = useState(0);
  const [remainingPins, setRemainingPins] = useState(10);

  const handleClick = (pins) => {
    dispatch(updateFrame({ roll, pins }));
    //special case when we take all 10 pins, on the first roll => strike
    if (roll === 0 && pins === 10) {
      setRoll(1);
      setRemainingPins(0);
    }
    if (roll === 0 && pins !== 10) {
      setRoll(1);
      setRemainingPins(10 - pins);
    } else {
      setRoll(0);
      setRemainingPins(10);
    }
  };
  // Generate 10 buttons, the number of it representing the value of the pins you broke down
  // in the first round, and the generate a list of buttons with values representing what pins are left for the second

  //remanaing pins is the length of array+1, and map, itterates over every element in the array
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
