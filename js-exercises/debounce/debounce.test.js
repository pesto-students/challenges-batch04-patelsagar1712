import { debounce } from './debounce';

jest.useFakeTimers();
describe('debounce', () => {
  test('Debounce function should work', () => {
    const func = jest.fn();
    const debounceFn = debounce(func, 1000);
    debounceFn();
    expect(func).toHaveBeenCalledTimes(0);
    for (let i = 0; i < 15; i++) {
      debounceFn();
    }
    expect(func).toHaveBeenCalledTimes(0);
    jest.runAllTimers();
    expect(func).toHaveBeenCalledTimes(1);
  });
});
