function sumFibs(num) {
  if (num <= 0) return 0;
  if (num === 1) return 2;
  const fibonacciNums = [1, 1];

  let nextFibonacciNums = fibonacciNums[fibonacciNums.length - 1]
    + fibonacciNums[fibonacciNums.length - 2];
  while (nextFibonacciNums <= num) {
    fibonacciNums.push(nextFibonacciNums);
    nextFibonacciNums = fibonacciNums[fibonacciNums.length - 1]
      + fibonacciNums[fibonacciNums.length - 2];
  }
  const oddFibonacciNums = fibonacciNums.filter(
    (fibonacciNum) => fibonacciNum % 2 !== 0,
  );
  return oddFibonacciNums.reduce((sum, fibonacciNum) => sum + fibonacciNum, 0);
}

// Cache will be done later
function cacheFunction(sumFb) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = sumFb(...args);
    cache.set(key, result);
    return result;
  };
}

export { sumFibs, cacheFunction };
