// import { calculateTotalScore } from '../src/calcTotalScore.js';
// import { calculateTotalScore } from '../src/calcTotalScoreLastFrame.js';
import { calculateTotalScore } from '../src/calcTotScoreRec.js';// is working as expected
// import { calculateTotalScore } from '../src/calcRec2.js';  perfect score is wrong
//  import { calculateTotalScore } from '../src/calcRec1.js';


test('calculates score correctly when no strikes or spares', () => {
  const frames = [
    [8, 0],
    [6, 0],
  ];
  const score = calculateTotalScore(frames);

  expect(score).toBe(14);
});

test('calculates score correctly with strikes', () => {
  const frames = [
    [10, null],
    [3, 4],
  ];
  expect(calculateTotalScore(frames)).toBe(24);
});

test('calculates score correctly with spares', () => {
  const frames = [
    [8, 2],
    [3, 0],
  ];
  expect(calculateTotalScore(frames)).toBe(16);
});

test('calculates score correctly with various frame combinations', () => {
  const frames = [
    [10, null],
    [8, 2],
    [3, 4],
  ];
  expect(calculateTotalScore(frames)).toBe(40);
});


test('calculates score correctly with two strikes and one frame', () => {
  const frames = [
    [10, null],
    [10, null],
    [3, 4],
  ];
  expect(calculateTotalScore(frames)).toBe(47);
});


test('calculates score correctly with three strikes and one frame', () => {
  const frames = [
    [10, null],
    [10, null],
    [10, null],
    [3, 4],
  ];
  expect(calculateTotalScore(frames)).toBe(77);
});


test('calculates score correctly with three strikes, one spare and one frame', () => {
  const frames = [
    [10, null],
    [10, null],
    [10, null],
    [5, 5],
    [3, 4],
  ];
  expect(calculateTotalScore(frames)).toBe(95);
});


test('calculates score perfect score, 300', () => {
  const frames = [
    [10, null],
    [10, null],
    [10, null],
    [10, null],
    [10, null],
    [10, null],
    [10, null],
    [10, null],
    [10, null],
    [10, 10, 10],
  ];
  expect(calculateTotalScore(frames)).toBe(300);
});

  test('should calculate correct score when there is a strike not followed by a strike', () => {
    const frames = [[10, null], [4, 3], [3, 4], [2, 2], [1, 1], [0, 5], [5, 0], [1, 1], [2, 2], [3, 7, 4]];
    expect(calculateTotalScore(frames)).toBe(67);
  });

  test('should calculate correct score when there is a spare not followed by a strike', () => {
    const frames = [[1, 9], [4, 3], [3, 4], [2, 2], [1, 1], [0, 5], [5, 0], [1, 1], [2, 2], [3, 7,3]];
    expect(calculateTotalScore(frames)).toBe(63);
  });

  test('should calculate correct score when there are consecutive strikes', () => {
    const frames = [[10, null], [10, null], [3, 4], [2, 2], [1, 1], [0, 5], [5, 0], [1, 1], [2, 2], [3, 7,3]];
    expect(calculateTotalScore(frames)).toBe(82);
  });

  test('should calculate correct score for the last frame with a strike', () => {
    const frames = [[1, 2], [3, 4], [2, 3], [4, 1], [5, 0], [0, 5], [1, 1], [2, 2], [3, 3], [10, 5, 4]];
    expect(calculateTotalScore(frames)).toBe(61);
  });


  
  test('should calculate correct score when the last frame is a spare', () => {
    const frames = [[1, 2], [3, 4], [2, 3], [4, 1], [5, 0], [0, 5], [1, 1], [2, 2], [3, 3], [4, 5]];
    expect(calculateTotalScore(frames)).toBe(51);
  });
