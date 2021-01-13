// your implementation
function map(obj, callFunc) {
  const key = Object.entries(obj);
  const valuePair = [];
  for (const values of key) {
    valuePair.push(callFunc(values));
  }
  return Object.fromEntries(valuePair);
}
function filter(obj, callFunc) {
  const objKeys = Object.entries(obj);
  const valuePair = [];
  for (const keys of objKeys) {
    if (callFunc(keys)) {
      valuePair.push(keys);
    }
  }
  return Object.fromEntries(valuePair);
}
function invert(obj) {
  return Object.fromEntries(Object.entries(obj).map(([key, value]) => ([value, key])));
}
function merge(...args) {
  let mergeObj = {};
  args.map((obj) => {
    mergeObj = { ...mergeObj, ...obj };
    return null;
  });

  return mergeObj;
}
function all(obj, func) {
  return (obj.every(func));
}
function some(obj, func) {
  return (obj.some(func));
}
// const func = ([key, value]) => key === 'name';
// const obj = {
//   name: 'Sagar Patel',
//   firstName: 'Sagar',
// };
// console.log(invert(obj));

export {
  map,
  filter,
  invert,
  merge,
  all,
  some,
};
