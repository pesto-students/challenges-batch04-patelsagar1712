/* eslint-disable linebreak-style */
function reverse() {
  return (...args) => {
    const allArguments = args;
    return allArguments.reverse();
  };
}

export { reverse };
