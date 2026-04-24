import { add, subtract, multiply } from './calculator.js';

test('Alfa: add(1, 2) should return 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('Gamma: subtract(5, 2) should return 3', () => {
  expect(subtract(5, 2)).toBe(3);
});

test('Gamma: subtract(10, 4) should return 6', () => {
  expect(subtract(10, 4)).toBe(6);
});

test('Gamma: subtract(0, 5) should return -5', () => {
  expect(subtract(0, 5)).toBe(-5);
});

test('Alfa (como Beta): multiply(2, 3) should return 6', () => {
  expect(multiply(2, 3)).toBe(6);
});
