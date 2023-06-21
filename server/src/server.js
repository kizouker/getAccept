import express from 'express';
import cors from 'cors';
import { SERVER_PORT, ROUTE_POST_CALC_TOTALSCORE } from './constants.mjs'
import { calculateTotalScore } from '../src/calcTotalScore.js';
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.post(ROUTE_POST_CALC_TOTALSCORE, (req, res) => {
  const frames = req.body.frames;
  const totalScore = calculateTotalScore(frames.frames);
  console.log('server received frames ', frames.frames);
  res.json({
    totalScore: totalScore,
    message: 'Frames received successfully',
    frames: frames,
  });
});


// Start the server
export const server = app.listen(SERVER_PORT, () => {
  console.log('Server is listening on port ' + SERVER_PORT);
});
