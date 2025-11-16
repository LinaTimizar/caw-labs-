// notation.test.js
const mean = require('./notation');

describe('mean function', () => {
test('calculates average correctly', () => {
    expect(mean([10, 20, 30])).toBe(20);
});

test('works with different values', () => {
    expect(mean([5, 15, 25, 35])).toBe(20);
});

test('works with single element array', () => {
    expect(mean([50])).toBe(50);
});
});
