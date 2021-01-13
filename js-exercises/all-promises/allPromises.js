function allPromises(args) {
  const result = [];
  let counter = 0;

  return new Promise((resolve, reject) => {
    args.forEach((element) => {
      Promise.resolve(element)
        .then((item) => {
          counter += 1;
          result.push(item);

          if (counter === args.length) {
            resolve(result);
          }
        }).catch((error) => {
          reject(error);
        });
    });
  });
}

export { allPromises };
