const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let count = 0;

  return (...args) => {
    if (n === count) {
      return null;
    }
    count++;
    return cb(...args);
  };
};
export {
  limitFunctionCallCount,
};
