import React, { useEffect, useState } from 'react';
import '../css/Score.css';
import calcOnServer from '../Api-helper.js';
import { useSelector } from 'react-redux';

const Score = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchDataAsync() {
      const resolvedData = await calcOnServer(frames);
      console.log('resolveddata', resolvedData);
      setData(resolvedData);
    }
    fetchDataAsync();
  }, []);

  const frames = useSelector((state) => state.bowling.frames);

  console.log('Score, frames before', frames);
  let totalSum = data ? data.totalSum : null;
  let currentSum = data ? data.currentSum : null;

  console.log('server sent, totalSum: ', totalSum);
  console.log('server sent, currentSum: ', currentSum);

  return (
    <div className="container2">
      <div className="box" id="hsum">
        hsum: {totalSum}
      </div>
      <div className="box" id="maxSum">
        maxSum: {currentSum}
      </div>
    </div>
  );
};

export default Score;
