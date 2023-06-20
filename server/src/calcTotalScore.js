export function calculateTotalScore(frames) {
  let totalScore = 0;

  for (let i = 0; i < frames.length; i++) {
    const frame = frames[i];
    const isStrike = frame[0] === 10;
    const isSpare = !isStrike && frame[0] + frame[1] === 10;

    if (isStrike) {
      totalScore += 10;
      if (i + 1 < frames.length) {
        const nextFrame = frames[i + 1];
        totalScore += sumNonNullValues(nextFrame); // Add both rolls of next frame

        if (nextFrame[0] === 10 && i + 2 < frames.length) {
          // If next frame is also a strike
          totalScore += frames[i + 2][0] || 0; // Add first roll of the frame after next
        }
      }
    } else if (isSpare) {
      totalScore += 10;
      if (i + 1 < frames.length) {
        totalScore += frames[i + 1][0] || 0; // Add first roll of next frame
      }
    } else {
      totalScore += sumNonNullValues(frame);
    }
  }

  return totalScore;
}

function sumNonNullValues(arr) {
  return arr.reduce((acc, num) => (num !== null ? acc + num : acc), 0);
}
