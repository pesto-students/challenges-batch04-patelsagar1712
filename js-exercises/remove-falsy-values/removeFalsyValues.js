function removeFalsyValues(arrays) {
  return arrays.filter(
    (element) => {
      if (Boolean(element)) {
        return element;
      }
    },
  );
}
export {
  removeFalsyValues,
};
