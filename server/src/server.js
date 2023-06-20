import express from 'express';
import cors from 'cors';
import {
  SERVER_PORT,
  URL_GET_MAXSCORE,
  URL_POST_CALC_TOTALSCORE,
  URL_POST_CALC_CURRENTSCORE,
} from '../../common/constants.mjs';
import { calculateTotalScore } from '../src/calcTotalScore.js';
//'../../common/constants';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get(URL_GET_MAXSCORE, (req, res) => {
  res.json({ maxScore: '300', message: 'Maxscore received successfully' });
});

app.post(URL_POST_CALC_TOTALSCORE, (req, res) => {
  const frames = req.body.frames;
  const totalScore = calculateTotalScore(frames);
  console.log('server received frames ', frames);
  res.json({
    totalScore: totalScore,
    message: 'Frames received successfully',
    frames: frames,
  });
});

app.post(URL_POST_CALC_CURRENTSCORE, (req, res) => {
  const currentFrame = req.body.currentFrame;
  console.log('current frame: ', currentFrame);

  const currentScore = calculateTotalScore(currentFrame);

  res.json({
    currentScore: currentScore,
    message: 'Current scores received successfully',
  });
});

// Start the server
export const server = app.listen(SERVER_PORT, () => {
  console.log('Server is listening on port ' + SERVER_PORT);
});
