/* eslint-disable linebreak-style */
// write your own test cases
import { reverse } from './flipArgs';

describe('Flip Array', () => {
  test('should get function', () => {
    expect(typeof reverse).toEqual('function');
  });
  test('should get Reversed Array', () => {
    const reverseFun = reverse();
    expect(reverseFun('a', 'b', 'c')).toEqual(['c', 'b', 'a']);
    expect(reverseFun('1', '2', '3', '4')).toEqual(['4', '3', '2', '1']);
  });
});
