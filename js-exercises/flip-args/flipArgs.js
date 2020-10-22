/* eslint-disable no-console */
// eslint-disable-next-line func-names
let reverse = function (...args) {
  console.log(args);
  args = args.reverse();
  console.log(args);
  return (function (reversed) {
    return reversed;
  }(args));
};
console.log(reverse(['1', '2', '3']));
// export { reverse };
