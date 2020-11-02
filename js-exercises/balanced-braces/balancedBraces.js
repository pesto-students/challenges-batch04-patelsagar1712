function balancedBraces(args) {
  const paraMap = new Map();
  const stack = [];
  paraMap.set('{', '}');
  paraMap.set('(', ')');
  paraMap.set('[', ']');
  let breakFlag = false;
  [...args].forEach(e => {
    if (!breakFlag) {
      if (e === '(') stack.push(paraMap.get(e));
      else if (e === ')' && e !== stack.pop()) breakFlag = true;
      else if (e === '{') stack.push(paraMap.get(e));
      else if (e === '}' && e !== stack.pop()) breakFlag = true;
      else if (e === '[') stack.push(paraMap.get(e));
      else if (e === ']' && e !== stack.pop()) breakFlag = true;
    }
  });
  if (stack.length === 0) return true;
  return false;
}
export {
  balancedBraces,
};
