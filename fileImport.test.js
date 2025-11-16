// fileImport.test.js
describe('fileImport.js output', () => {
test('should print correct average', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
    require('./fileImport');
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0]).toBe("Average = ");
    expect(spy.mock.calls[0][1]).toBe(15);

    spy.mockRestore();
});
});
