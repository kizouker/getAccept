import '../css/Frame.css';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import calcOnServer from '../Api-helper.js';

const Frame = ({ frameIndex }) => {
  const frames = useSelector((state) => state.bowling.frames);
  const currentFrame = frames[frameIndex];
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchDataAsync() {
      const resolvedData = await calcOnServer(frames, frameIndex);
      console.log('resolveddata', resolvedData);
      setData(resolvedData);
    }
    fetchDataAsync();
  }, [frames]);

  let currentSum = data ? data.currentSum : null;
  console.log('currentSum: ', currentSum);

  const currentSum2 = currentSum;

  let roll1, roll2, roll3;

  if (currentFrame !== null && currentFrame !== undefined && currentFrame[0] !== null) {
    roll1 = currentFrame[0];
    if (isStrike(roll1)) {
      roll2 = 'X';
    } else if (currentFrame[1] !== null) {
      roll2 = currentFrame[1];

      if (isSpare(roll1, roll2)) {
        roll2 = '/';
      }
    } else {
      roll2 = '-';
    }
  } else {
    roll1 = '-';
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
      <div className="box" id="rollThree">
        {roll3}
      </div>
      <div className="box" id="currentSum">
        {currentSum2}
      </div>
    </div>
  );
};

export default Frame;

function isSpare(roll1, roll2) {
  return roll1 + roll2 === 10;
}

function isStrike(roll1) {
  return roll1 === 10;
}

Frame.propTypes = {
  frameIndex: PropTypes.number.isRequired
};
