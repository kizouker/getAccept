import { calculateTotalScore } from './calculateTotalScore';

test('calculates score correctly when no strikes or spares', () => {
  const frames = [
    [ 8, 0 ],
    [ 6, 0 ],
  ];
  expect(calculateTotalScore(frames)).toBe(14);
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
