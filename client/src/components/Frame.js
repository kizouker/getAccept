import '../css/Frame.css';
import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const Frame = ({ frameIndex }) => {
  const frames = useSelector((state) => state.bowling.frames);
  const currentFrame = frames[frameIndex];
  let roll1, roll2, roll3;
  roll1 = '-';
  roll2 = '-';
  roll3 = '-';

  if (currentFrame && currentFrame[0] !== null) {
    if (isStrike(currentFrame[0], currentFrame[1])) {
      roll1 = 10;
      roll2 = 'X';
    } else {
      roll1 = currentFrame[0];
      roll2 =
        currentFrame[1] !== null && isSpare(roll1, currentFrame[1]) ? '/' : currentFrame[1] || '-';
    }

    // If it's the last frame and a third roll exists
    if (frameIndex === 9 && currentFrame[2] !== null) {
      roll3 = isStrike(currentFrame[2]) ? 'X' : currentFrame[2];
    }
  }

  return (
    <div className="container">
      <div className="box" id="frame">
        {frameIndex + 1}
      </div>
      <div className="box" id="rollOne">
        {roll1}
      </div>
      <div className="box" id="rollTwo">
        {roll2}
      </div>
      {frameIndex === 9 && (
        <div className="box" id="rollThree">
          {roll3}
        </div>
      )}
    </div>
  );
};
export default Frame;

function isSpare(roll1, roll2) {
  return roll1 + roll2 === 10;
}

function isStrike(roll1, roll2) {
  return roll1 === 10 && roll2 === null;
}

Frame.propTypes = {
  frameIndex: PropTypes.number.isRequired
};
