import { throttle } from './throttle';

describe('throttle', () => {
  test('function to check throttle', () => {
    const fn = function (time) {
      return time;
    };
    const timer = 1000;
    expect(typeof throttle(fn, timer)).toBe('function');
  });
});
