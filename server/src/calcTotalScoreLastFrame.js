export function calculateTotalScore(frames) {
  let totalScore = 0;

  for (let i = 0; i < frames.length; i++) {
    const frame = frames[i];
    const isStrike = frame[0] === 10;
    const isSpare = !isStrike && frame[0] + frame[1] === 10;
    const lastFrame = frames.length - 1 === i;


    if (lastFrame){
      return sumNonNullValues(frames[i]);
    }
    if (isStrike) {
      totalScore += 10;
      
      if (i + 1 < frames.length) {
        const nextFrame = frames[i + 1];
        totalScore += sumNonNullValues(nextFrame);
        if (nextFrame[1] !== null && i + 2 < frames.length) {
          totalScore += frames[i + 2][0] || 0;
        }
      }
    } else if (isSpare) {
      totalScore += 10;
      if (i + 1 < frames.length) {
        totalScore += frames[i + 1][0] || 0;
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
