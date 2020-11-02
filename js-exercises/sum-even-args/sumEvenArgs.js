const sumEvenArgs = (...args) => {
  //loop to check whether values are even
  let sum = 0;
  args.forEach((element) => {
    if (typeof element === 'number') {
      if (element % 2 === 0) sum += element;
    }
  });
  return sum;
};

export { sumEvenArgs };
