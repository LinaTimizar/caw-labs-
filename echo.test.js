// echo.test.js
describe('echo.js output', () => {
test('should print echo 5 times and JS from server 10 times', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
    require('./echo');
    expect(spy).toHaveBeenCalledTimes(15);
    for (let i = 0; i < 5; i++) {
    expect(spy.mock.calls[i][0]).toBe("echo");
    }

    for (let i = 5; i < 15; i++) {
    expect(spy.mock.calls[i][0]).toBe("JS from server");
    }

    spy.mockRestore();
});
});
