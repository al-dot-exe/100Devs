// Write a function that will check if two given characters are the same case.
//
//     If either of the characters is not a letter, return -1
//     If both characters are the same case, return 1
//     If both characters are letters, but not the same case, return 0
//
// Examples
//
// 'a' and 'g' returns 1
//
// 'A' and 'C' returns 1
//
// 'b' and 'G' returns 0
//
// 'B' and 'g' returns 0
//
// '0' and '?' returns -1
//

function sameCase(a, b){
  // we can use numbers to display our letters 
  // all uppercase letters are exactly 32 decimal bytes less than their lowercase equivalents on the ASCII table
  // Z is equal to 0x5a in hex or 90 in dec and z is equal to 0x7a or 122
  // A is equal to 0x42 in hex or 65 in dec  and a is equal to 0x62 or 97
  
  const num1 = a.charCodeAt(0);
  const num2 = b.charCodeAt(0);
  
  if (a.match(/[a-zA-Z]/) === null || b.match(/[a-zA-Z]/) === null) {
    return - 1 ;
  } 
  else {
    return (num1 <= 90 && num2 <= 90) || (num1 >= 97 && num2 >= 97) ? 1 : 0;
  }
}
