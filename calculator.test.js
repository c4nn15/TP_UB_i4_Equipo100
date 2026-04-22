import { add, subtract } from './calculator.js';

test('Alfa: add(1, 2) should return 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('Beta: subtract(5, 2) should return 3', () => {
  // Esta prueba es correcta, pero fallará por culpa del bug en calculator.js
  expect(subtract(5, 2)).toBe(3);
});
