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

  return (
    <div className="score">
      <div className="box" id="headLine">
        ScoreTable
      </div>
      <div className="box" id="totalScoreHeader">
        totalScore:
      </div>
      <div className="box" id="totalScore">
        {totalScore}
      </div>
      <div className="box" id="maxScoreHeader">
        maxScore:
      </div>
      <div className="box" id="maxScore">
        {maxScore}
      </div>
    </div>
  );
};

export default Score;
