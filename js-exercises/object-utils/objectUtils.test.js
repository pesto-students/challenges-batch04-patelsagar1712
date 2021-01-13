import {
  map, filter, invert, merge, all, some,
} from './objectUtils';

// write your own test cases
describe('Object Utils', () => {
  test('Should return values mapped', () => {
    const func = ([key, value]) => [key.toUpperCase(), value * 10];
    const obj = {
      a: 5,
      b: 10,
    };
    expect(map(obj, func)).toEqual({ A: 50, B: 100 });
  });
  test('Should return values filtered', () => {
    const func = ([key]) => key === 'name';
    const obj = {
      name: 'SagarPatel',
      firstName: 'Sagar',
    };
    expect(filter(obj, func)).toEqual({ name: 'SagarPatel' });
  });
  test('Should return values invert', () => {
    const obj = {
      name: 'SagarPatel',
      firstName: 'Sagar',
    };
    expect(invert(obj)).toEqual({ SagarPatel: 'name', Sagar: 'firstName' });
  });
  test('Should return values merge', () => {
    const obj = {
      name: 'SagarPatel',
      firstName: 'Sagar',
    };
    const objNew = {
      a: 5,
      b: 10,
    };
    const ans = { ...obj, ...objNew };
    expect(merge(obj, objNew)).toEqual(ans);
  });
  test('Should return true/false according to given func condition with all', () => {
    const isBelowThreshold = (currentValue) => currentValue < 40;
    const array1 = [1, 30, 39, 29, 10, 13];
    const array2 = [1, 30, 39, 29, 10, 13, 41];
    expect(all(array1, isBelowThreshold)).toBe(true);
    expect(all(array2, isBelowThreshold)).toBe(false);
  });
  test('Should return true/false according to given func condition with sum', () => {
    const isBelowThreshold = (currentValue) => currentValue < 40;
    const array1 = [1, 30, 39, 29, 10, 13];
    const array2 = [1, 30, 39, 29, 10, 13, 41];
    const array3 = [41, 42, 43];
    expect(some(array1, isBelowThreshold)).toBe(true);
    expect(some(array2, isBelowThreshold)).toBe(true);
    expect(some(array3, isBelowThreshold)).toBe(false);
  });
});
