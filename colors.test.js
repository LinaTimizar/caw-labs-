const getColors = require('./colors');

test('toString returns colors separated by commas', () => {
    expect(getColors().toString).toBe("Red,Green,White,Black");
});

test('join with default separator returns comma-separated list', () => {
    expect(getColors().joinDefault).toBe("Red,Green,White,Black");
});

test('join with no separator concatenates all strings', () => {
    expect(getColors().joinNoSeparator).toBe("RedGreenWhiteBlack");
});
