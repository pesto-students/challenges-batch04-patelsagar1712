// You can change the `args`
function bind(method, obj) {
  return function (...args) {
    return method.apply(obj, args);
  };
}

module.exports = { bind };
