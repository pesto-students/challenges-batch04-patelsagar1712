/* eslint-disable linebreak-style */
// write your own test cases
import { reverse } from './flipArgs';

describe('Flip Array', () => {
  test('should get reverse Elements', () => {
    expect(reverse(['1', '2', '3'])).toEqual(['3', '2', ' 1']);
    //expect(reverse('[a,b,c]')).toStrictEqual([c, b, a]);
   // expect(reverse('[aa,bb,cc]')).toStrictEqual([cc, bb, aa]);
    // expect().toBe(2);
    // expect().toBe(3);
    // expect().toBe(4);
  });
});
