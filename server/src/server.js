const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const SERVER_PORT = process.env.port || 4000

app.use(bodyParser.json());

app.post('/score', (req, res) => {
    console.log('serve");
  
})
//   const rolls = req.body.rolls;

//   if (!rolls || !Array.isArray(rolls)) {
//     return res.status(400).json({ error: 'Invalid input. Rolls must be an array.' });
//   }

//   let totalScore = 0;
//   let frameIndex = 0;

//   for (let frame = 0; frame < 10; frame++) {
//     if (isStrike(frameIndex, rolls)) {
//       totalScore += 10 + strikeBonus(frameIndex, rolls);
//       frameIndex++;
//     } else if (isSpare(frameIndex, rolls)) {
//       totalScore += 10 + spareBonus(frameIndex, rolls);
//       frameIndex += 2;
//     } else {
//       totalScore += sumOfBallsInFrame(frameIndex, rolls);
//       frameIndex += 2;
//     }
//   }

//   res.json({ score: totalScore });
// });

// // Helper functions

// function isStrike(frameIndex, rolls) {
//   return rolls[frameIndex] === 10;
// }

// function isSpare(frameIndex, rolls) {
//   return rolls[frameIndex] + rolls[frameIndex + 1] === 10;
// }

// function strikeBonus(frameIndex, rolls) {
//   return rolls[frameIndex + 1] + rolls[frameIndex + 2];
// }

// function spareBonus(frameIndex, rolls) {
//   return rolls[frameIndex + 2];
// }

// function sumOfBallsInFrame(frameIndex, rolls) {
//   return rolls[frameIndex] + rolls[frameIndex + 1];
// }


// Start the server
app.listen(SERVER_PORT , () => {
  console.log('Server is listening on port ' + SERVER_PORT);
});
