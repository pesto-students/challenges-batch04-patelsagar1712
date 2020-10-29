// import { isString } from 'util';

function abbreviateString(str) {
  if (str != null && typeof str === 'string') {
    const spiltStr = str.split(' ');
    const returnStr = `${spiltStr[0]} ${spiltStr[spiltStr.length - 1][0].toUpperCase()}.`;
    return returnStr;
  }
  throw new Error('error');
}

export { abbreviateString };
