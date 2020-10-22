/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable eqeqeq */
function duplicateLetters(...args) {
  // eslint-disable-next-line no-param-reassign
  args = String(args).split('');
  const mapV = new Map();
  for (let i = 0; i < args.length; i++) {
    if (mapV.has(args[i])) {
      mapV.set(args[i], mapV.get(args[i]) + 1);
    } else {
      mapV.set(args[i], 1);
    }
  }
  // console.log(mapV);
  let maxDuplicate = 0;

  mapV.forEach(element => {
    // console.log(element);
    if (maxDuplicate < element) {
      maxDuplicate = element;
    }
  });
  if (maxDuplicate == 1) {
    return false;
  }
  return maxDuplicate;
}

export {
  duplicateLetters,
};
