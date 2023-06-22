export function calculateTotalScore(frames) {
    if (frames.length === 0) return 0;

    const currentFrame = frames[0];
    const nextFrame = frames[1];
    const isStrike = currentFrame[0] === 10;
    const isSpare = currentFrame[0] + currentFrame[1] === 10;

    let frameScore = isStrike ? 10 : sum(currentFrame);

    if (isStrike && nextFrame) {
        frameScore += sum(nextFrame.slice(0, 2));
        if (nextFrame[0] === 10 && frames[2]) {
            frameScore += frames[2][0];
        }
    } else if (isSpare && nextFrame) {
        frameScore += nextFrame[0];
    }

    return frameScore + calculateTotalScore(frames.slice(1));
}

function sum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
