function accessorProperties() {
  const object = {
    binValue: null,
    get number() {
      return this.binValue;
    },
    set number(value) {
      if (typeof value === 'number') this.binValue = parseInt(value.toString(2), 10);
      else this.binValue = undefined;
    },
  };
  Object.defineProperty(object, 'binValue', {
    enumerable: false,
  });
  return object;
}
// const returnObject = accessorProperties();
// returnObject.number = 'sagar';
// console.log(returnObject.number);
export {
  accessorProperties,
};
