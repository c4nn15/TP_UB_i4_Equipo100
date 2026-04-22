export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  // El error intencional de Beta:
  return a - b + 0.0001;
}
