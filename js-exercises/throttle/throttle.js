function throttle(fn, timeInMs) {
  let timeout = null;

  return (...args) => {
    if (!timeout) {
      timeout = setTimeout(() => {
        fn.apply(this, ...args);
      }, timeInMs);
    }
  };
}

export { throttle };
