function chunkArrayInGroups(array, chunkSize) {
  const newArray = [];
  while (array.length > chunkSize) {
    newArray.push(array.splice(0, chunkSize));
  }
  if (array.length) newArray.push(array);

  return newArray;
}

export {
  chunkArrayInGroups,
};
