import React, { useEffect, useState } from 'react';
import '../css/Score.css';
import calcOnServer from '../Api-helper.js';
import { useSelector } from 'react-redux';

const Score = () => {
  const [data, setData] = useState(null);
  const frames = useSelector((state) => state.bowling.frames);

  useEffect(() => {
    async function fetchDataAsync() {
      const resolvedData = await calcOnServer(frames);
      console.log('resolveddata', resolvedData);
      setData(resolvedData);
    }
    fetchDataAsync();
  }, [frames]);

  let totalScore = data ? data.totalScore : null;
  let maxScore = data ? data.maxScore : null;

  console.log('totalScore: ', totalScore);
  console.log('currentSum: ', maxScore);

  // totalScore = 'N/A';
  // maxScore = 'N/A';

  return (
    <div className="container2">
      <div className="box" id="hsum">
        totalScore: {totalScore}
      </div>
      <div className="box" id="maxSum">
        maxScore: {maxScore}
      </div>
    </div>
  );
};

export default Score;
