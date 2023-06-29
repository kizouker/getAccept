import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateFrame, updateFrameScores } from '../redux/BowlingSlice.js';
import '../css/PinsDown.css';
// import PropTypes from 'prop-types';'
import { useSelector } from 'react-redux';

const PinsDown = () => {
  const dispatch = useDispatch();
  const [remainingPins, setRemainingPins] = useState(10);
  // const frames = useSelector((state) => state.bowling.frames);
  // let frameIndex = useSelector((state) => state.bowling.frameIndex);
  const roll = useSelector((state) => state.bowling.roll);
  let frameIndex = useSelector((state) => state.bowling.frameIndex);
  const handleClick = (pins) => {
    console.log('PD: frameIndex: ' + frameIndex);
    console.log('PD: roll: ' + roll);

    dispatch(updateFrame({ frameIndex, pins, roll }));
    dispatch(updateFrameScores({ frameIndex }));
    if (pins === 10 || roll === 1) {
      setRemainingPins(10);
    } else {
      setRemainingPins(10 - pins);
    }
    // frameIndex++;
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

// PinsDown.propTypes = {
//   frameIndex: PropTypes.number.isRequired
// };
