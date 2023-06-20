import React from 'react';
import TotalScore from './TotalScore.js';
import MaxScore from './MaxScore.js';
import CurrentScore from './CurrentScore.js';
import { URL_POST_CALC_TOTALSCORE, URL_PO } from '../../../common/constants.js';


const url_post = URL_POST_CALC_TOTALSCORE;

const ScoreBoard = () => {
  return (
    <div>
      <h2>ScoreBoard</h2>
      <CurrentScore url="URL_POST_CALC_TOTALSCORE"></CurrentScore>
      <MaxScore url=URL_POST_CALC_TOTALSCORE"></MaxScore>
      <TotalScore url='URL_POST_CALC_TOTALSCORE'></TotalScore>
    </div>
  );
};

export default ScoreBoard;
