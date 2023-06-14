import express from 'express';
import cors from 'cors';


const app = express();
const SERVER_PORT = process.env.port || 4000;
const URL = '/calcscore/post/';
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.post(URL, (req, res) => {
  console.log('Calculating total score...');

  const frames = req.body.frames;

  console.log('frames received:', frames);
  const totalScore = calculateTotalScore(frames);

  res.json({
    totalScore: totalScore,
    maxScore: "300",
    message: 'Frames received successfully'
  });
  

});

// Start the server
app.listen(SERVER_PORT, () => {
  console.log('Server is listening on port ' + SERVER_PORT);
});

function calculateTotalScore(frames) {
  let totalScore = 0;

  for (let i = 0; i < frames.length; i++) {
    const frame = frames[i];
    const isFirstRollNull = frame[0] === null;
    const isSecondRollNull = frame[1] === null;
    const isStrike = !isFirstRollNull && frame[0] === 10;
    const isSpare = !isStrike && !isFirstRollNull && !isSecondRollNull && frame[0] + frame[1] === 10;

    if (!isFirstRollNull && isSecondRollNull) {
      totalScore += frame[0];
      continue;
    }

    // If it's a strike, add the next two rolls as a bonus
    if (isStrike && i < frames.length - 1) {
      const nextFrame = frames[i + 1];
      const nextTwoRolls = [
        ...(nextFrame[0] !== null ? [nextFrame[0]] : []),
        ...(nextFrame[1] !== null ? [nextFrame[1]] : []),
      ];
      totalScore += 10 + sumNonNullValues(nextTwoRolls);
    }
    // If it's a spare, add the next roll as a bonus
    else if (isSpare && i < frames.length - 1) {
      const nextFrame = frames[i + 1];
      totalScore += 10 + (nextFrame[0] !== null ? nextFrame[0] : 0);
    }
    // Otherwise, sum up the frame normally
    else {
      totalScore += sumNonNullValues(frame);
    }
  }

  return totalScore;
}

// Helper function to sum an array of non-null values
function sumNonNullValues(arr) {
  return arr.reduce((acc, num) => (num !== null ? acc + num : acc), 0);
}
