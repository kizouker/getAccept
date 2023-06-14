import React from 'react';
import '../css/Score.css';
import addPosts from '../Api-helper.js';
import { useSelector } from 'react-redux';

// const totalSum = response !== ( null || undefined ) ? response.totalSum;
// const currentSum = response !== ( null || undefined ) ? response.currentSum;

const Score = () => {
  const frames = useSelector((state) => state.bowling.frames);

  console.log('Score, frames before', frames);
  const response = addPosts(frames);
  console.log('Score, frames response: ', response.frames);

  return (
    <div className="container2">
      <div className="box" id="hsum">
        {/* hsum: {totalSum} */}
      </div>
      <div className="box" id="maxSum">
        {/* maxSum: {currentSum} */}
      </div>
    </div>
  );
};

export default Score;
