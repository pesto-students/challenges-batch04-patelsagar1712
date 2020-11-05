import { accessorProperties } from './accessorProperties';

describe('Accessor Properties', () => {
  test('Should return Object', () => {
    const returnObject = accessorProperties();
    expect(typeof returnObject).toBe('object');
  });
  test('Should return binary Value', () => {
    const returnObject = accessorProperties();
    returnObject.number = 25;
    expect(returnObject.number).toBe(11001);
    returnObject.number = 100;
    expect(returnObject.number).toBe(1100100);
    returnObject.number = 'sagar';
    expect(returnObject.number).toBeUndefined();
  });
});
