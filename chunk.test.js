const chunk = require('./chunk');

test('splits array into chunks of given size', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
});

test('returns full array inside one chunk if size > length', () => {
    expect(chunk([1,2], 10)).toEqual([[1,2]]);
});

test('returns empty array when input array is empty', () => {
    expect(chunk([], 3)).toEqual([]);
});
