import express from 'express';
import cors from 'cors';


const app = express();
const SERVER_PORT = process.env.port || 4000;
const URL = '/calcscore/post/';
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.post(URL, (req, res) => {
  const frames = req.body.frames;
  const currentFrame = req.body.currentFrame;

  console.log('frames: ', frames);
  const totalScore = calculateTotalScore(frames.frames);
  const currenScore = calculateTotalScore(currentFrame);

  res.json({
    totalScore: totalScore,
    currentScore: currenScore,
    maxScore: "300",
    message: 'Frames received successfully'
  });
  

});

// Start the server
export const server = app.listen(SERVER_PORT, () => {
  console.log('Server is listening on port ' + SERVER_PORT);
});


export function calculateTotalScore(frames) {

  let totalScore =  0;
  console.log('Total Score: ' + totalScore);
  console.log('Frames ', frames);

  for (let i = 0; i < frames.length; i++) {
    const frame = frames[i];
    const isFirstRollNull = frame[0] === null;
    const isSecondRollNull = frame[1] === null;
    const isStrike = !isFirstRollNull && frame[0] === 10;
    const isSpare = !isStrike && !isFirstRollNull && !isSecondRollNull && frame[0] + frame[1] === 10;

    console.log('Total Score: ' + totalScore);
    // if (!isFirstRollNull && isSecondRollNull) {
    //   totalScore += frame[0];
    //   continue;
    // }
    console.log('Total Score: ' + totalScore);
    if (isStrike) {
      totalScore += 10;
      console.log('Total Score: ' + totalScore);
      // Add next two rolls' score
      if (i + 1 < frames.length) {
        const nextFrame = frames[i + 1];
        const isNextFrameStrike = nextFrame[0] === 10;
        const isNextFrameSpare = !isNextFrameStrike && nextFrame[1] !== null && nextFrame[0] + nextFrame[1] === 10;
        totalScore += nextFrame[0] !== null ? nextFrame[0] : 0;
        console.log('Total Score: ' + totalScore);  
        if (isNextFrameStrike && i + 2 < frames.length) {
          totalScore += frames[i + 2][0] !== null ? frames[i + 2][0] : 0;
        } else if (!isNextFrameStrike && !isNextFrameSpare) {
          totalScore += nextFrame[1] !== null ? nextFrame[1] : 0;
        }
      }
    } else if (isSpare) {
      totalScore += 10;
      console.log('Total Score: ' + totalScore);
      // Add next roll's score
      if (i + 1 < frames.length) {
        const nextFrame = frames[i + 1];
        totalScore += nextFrame[0] !== null ? nextFrame[0] : 0;
      }
    } else {
      totalScore += sumNonNullValues(frame);
      console.log('Total Score: ' + totalScore);
    }
  }

  return totalScore;
}

function sumNonNullValues(arr) {
  return arr.reduce((acc, num) => (num !== null ? acc + num : acc), 0);
}

