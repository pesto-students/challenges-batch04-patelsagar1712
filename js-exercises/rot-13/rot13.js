/* eslint-disable max-len */
const rot13 = (encodedString) => {
  let decodedString = '';
  for (const char of encodedString) {
    if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
      decodedString += String.fromCharCode(char.charCodeAt() - 13 < 65 ? char.charCodeAt() + 13 : char.charCodeAt() - 13);
    } else {
      decodedString += char;
    }
  }
  return decodedString;
};
export {
  rot13,
};
