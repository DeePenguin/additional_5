module.exports = function check(str, bracketsConfig) {
  const stackArray = [];
  const openBrackets = [];
  const closeBracket = [];
  bracketsConfig.forEach((pair => {
    openBrackets.push(pair[0]);
    closeBracket.push(pair[1]);
  }));
  mainLoop:
  for (let i = 0, len = str.length; i < len; i++ ) {
    let current = str[i];
    let expectedBracket = 0;
    const stackLength =  stackArray.length;
    for (let j = 0, len = openBrackets.length; j < len; j++){
      if (current === closeBracket[j]){
        expectedBracket = openBrackets[j];
        if (stackLength === 0 && current != expectedBracket) {
          stackArray.unshift(current);
        break mainLoop;
        }
        if (current === expectedBracket && current != stackArray[0]){
          stackArray.unshift(current);
          continue mainLoop;
        }
        if (expectedBracket != stackArray.shift()){
          stackArray.unshift(current);
          break mainLoop;
        }
      }
      if (current === openBrackets[j] && expectedBracket === 0) stackArray.unshift(current);
    }
  }
  return stackArray.length ? false : true;
}
