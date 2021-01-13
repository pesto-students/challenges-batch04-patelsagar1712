function debounce(fn, timeInMs) {
  let timeout = null;
  return (...args) => {
    const next = () => fn(...args);
    clearTimeout(timeout);
    timeout = setTimeout(next, timeInMs);
  };
}

export { debounce };
