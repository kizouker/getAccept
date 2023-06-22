export function calculateTotalScore(frames) {
  if (frames.length === 0) {
    return 0;
  }

  const [currentFrame, ...remainingFrames] = frames;
  const isStrike = currentFrame[0] === 10;
  const isSpare = !isStrike && currentFrame[0] + currentFrame[1] === 10;

  if (frames.length === 1) {
    // If it's the last (10th) frame
    return sumNonNullValues(currentFrame);
  }

    if (isStrike) {
    const [nextFrame = [], frameAfterNext = []] = remainingFrames;
    const firstBonusRoll = nextFrame[0] || 0;
    const isNextFrameStrike = nextFrame[1] === null
    const secondBonusRoll = isNextFrameStrike ? (frameAfterNext[0] || 0) : (nextFrame[1] || 0);
    const strikeBonus = firstBonusRoll + secondBonusRoll;
    return 10 + strikeBonus + calculateTotalScore(remainingFrames);
  }

  if (isSpare) {
    const [nextFrame = []] = remainingFrames;
    const spareBonus = nextFrame[0] || 0;
    return 10 + spareBonus + calculateTotalScore(remainingFrames);
  }

  return sumNonNullValues(currentFrame) + calculateTotalScore(remainingFrames);
}

function sumNonNullValues(arr) {
  return arr.reduce((acc, num) => (num !== null ? acc + num : acc), 0);
}
