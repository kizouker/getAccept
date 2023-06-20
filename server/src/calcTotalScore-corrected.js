export function calculateTotalScore(frames) {
    let totalScore = 0;
  
    for (let i = 0; i < frames.length; i++) {
      const frame = frames[i];
      const isFirstRollNull = frame[0] === null;
      const isSecondRollNull = frame[1] === null;
      const isStrike = !isFirstRollNull && frame[0] === 10;
      const isSpare = !isStrike && !isFirstRollNull && !isSecondRollNull && frame[0] + frame[1] === 10;
  
      if (isStrike) {
        totalScore += 10;
        if (i + 1 < frames.length) {
          const nextFrame = frames[i + 1];
          totalScore += nextFrame[0] !== null ? nextFrame[0] : 0;
  
          // This part is changed. If the next frame is not a strike, then we add the second roll of the next frame. If the next frame is a strike and there's another frame after it, we add the first roll of the frame after the next frame.
          if (!isSecondRollNull) {
            totalScore += nextFrame[1] !== null ? nextFrame[1] : 0;
          } else if (i + 2 < frames.length) {
            totalScore += frames[i + 2][0] !== null ? frames[i + 2][0] : 0;
          }
        }
      } else if (isSpare) {
        totalScore += 10;
        if (i + 1 < frames.length) {
          const nextFrame = frames[i + 1];
          totalScore += nextFrame[0] !== null ? nextFrame[0] : 0;  // For spares, only the first roll of the next frame is added to the score.
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
  