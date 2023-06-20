

export function calculateTotalScore(frames) {
  debugger;
    let totalScore = 0;
    console.log('Total Score: ' + totalScore);
    // console.log('frames ', frames);
  
    for (let i = 0; i < frames.length; i++) {
      //Let's look at one frame at a time
      //And check if it a strike or spare 
      //Or a normal one
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
          const firstRollNextFrame =  nextFrame[0];
          const secondRollNextFrame =  nextFrame[1];
          
          const isNextFrameStrike = firstRollNextFrame === 10;
          const isNextFrameSpare = !isNextFrameStrike && secondRollNextFrame !== null && firstRollNextFrame + secondRollNextFrame === 10;
          totalScore += firstRollNextFrame !== null ? firstRollNextFrame : 0;
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
  
  