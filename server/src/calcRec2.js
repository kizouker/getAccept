export function calculateTotalScore(frames) {
    if (frames.length === 0) return 0;

    const [currentFrame, nextFrame, nextNextFrame] = frames;
    const [firstRoll, secondRoll, bonusRoll] = currentFrame;
    const isStrike = firstRoll === 10;
    const isSpare = !isStrike && firstRoll + secondRoll === 10;

    let frameScore = sumNonNullValues(currentFrame);

    if (isStrike && nextFrame) {
        frameScore += sumNonNullValues(nextFrame);
        if (nextFrame[0] === 10 && nextNextFrame) {
            frameScore += nextNextFrame[0];
        }
    } else if (isSpare && nextFrame) {
        frameScore += nextFrame[0];
    }

    return frameScore + calculateTotalScore(frames.slice(1));
}

function sumNonNullValues(arr) {
    return arr.reduce((acc, num) => (num !== null ? acc + num : acc), 0);
}
