function dropElements(elements, predicate) {
  const newElements = [];

  for (const element of elements) {
    if (predicate(element)) newElements.push(element);
  }
  return newElements;
}

export { dropElements };
