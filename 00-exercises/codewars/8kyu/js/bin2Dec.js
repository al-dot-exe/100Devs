// Complete the function which converts a binary number (given as a string) to a decimal number.

function binToDec(bin){
  // manual conversion math
  let decNum = 0;
  let binArr = bin.split('');
  binArr.forEach(binNum => Number(binNum));
  binArr.forEach((digit, position) => decNum += (digit * (2 ** (binArr.length - (position + 1)))));
  return decNum;
}
