/* eslint-disable spaced-comment */
function fibo(n) {
  if (n <= 1) return n;
  return fibo(n - 1) + fibo(n - 2);
}
function sumFibs(num) {
  let sum = 0;
  let fib = 0;
  //console.log('num '+ num);
  while (sum < num) {
    const currentFib = fibo(fib);
    if (currentFib % 2 === 1) {
      //console.log(currentFib);
      sum += currentFib;
    }
    fib += 1;
  }
  return sum;
}

//Cache will be done later
function cacheFunction(sumFibsFn) {
  const cache = {};
  return (n) => {
    if (n in cache) {
      return cache[n];
    }
    const result = cacheFunction(n);
    cache[n] = result;
    return result;
  };
}

export { sumFibs, cacheFunction };
