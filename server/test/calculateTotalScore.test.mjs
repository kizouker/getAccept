import { calculateTotalScore } from '../src/calcTotalScore.js';
test('calculates score correctly when no strikes or spares',  () => {
  const frames = [
    [ 8, 0 ],
    [ 6, 0 ],
  ];
  const score = calculateTotalScore(frames);

  expect(score).toBe(14);
});

test('calculates score correctly with strikes', () => {
  const frames = [
    [ 10, null ],
    [ 3, 4 ],
  ];
  expect(calculateTotalScore(frames)).toBe(24);
});

test('calculates score correctly with spares', () => {
  const frames = [
    [ 8, 2 ],
    [ 3, 0 ],
  ];
  expect(calculateTotalScore(frames)).toBe(16);
});

test('calculates score correctly with various frame combinations', () => {
  const frames = [
    [ 10, null ],
    [ 8, 2 ],
    [ 3, 4 ],
  ];
  expect(calculateTotalScore(frames)).toBe(40);
});


test('calculates score correctly with two strikes and one frame', () => {
  const frames = [
    [ 10, null ],
    [ 10, null ],
    [ 3, 4 ],
  ];
  expect(calculateTotalScore(frames)).toBe(47);
});


test('calculates score correctly with three strikes and one frame', () => {
  const frames = [
    [ 10, null ],
    [ 10, null ],
    [ 10, null ],
    [ 3, 4 ],
  ];
  expect(calculateTotalScore(frames)).toBe(77);
});


test('calculates score correctly with three strikes, one spare and one frame', () => {
  const frames = [
    [ 10, null ],
    [ 10, null ],
    [ 10, null ],
    [ 5, 5 ],
    [ 3, 4 ],
  ];
  expect(calculateTotalScore(frames)).toBe(95);
});