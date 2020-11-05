function diffArray(...args) {
  const arry1 = args[0];
  const arry2 = args[1];
  const resultArray = [];

  for (let i = 0; i < arry1.length; i++) {
    if (!(arry2.indexOf(arry1[i]) !== -1)) resultArray.push(arry1[i]);
  }
  for (let i = 0; i < arry2.length; i++) {
    if (!(arry1.indexOf(arry2[i]) !== -1)) resultArray.push(arry2[i]);
  }
  return resultArray;
}
export {
  diffArray,
};
