// *Variables*
// Create a variable and console log the value
const sample = 'sample text';
console.log(sample);

// Create a variable, add 10 to it, and alert the value
let tenToTwenty = 10;
tenToTwenty += 10;
alert(tenToTwenty);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
const subtractFour = () => tenToTwenty - 3 - 4 - 1;
alert(subtractFour());

// Create a function that divides one number by another and returns the remainder
const divByOne = (num1, num2) => num1 % num2;

let firstNum = subtractFour();
alert(divByOne(firstNum, 4));


// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
let secondNum = divByOne(firstNum, 4);

// let jumanji = (num1, num2) => {
//   const num3 = num1 + num2;
//    return num3 > 50 ? `${num3}: Jumanji` : `${num3}: :(`;
// }
let jumanji = (num1, num2) => num1 + num2;

alert(jumanji(firstNum, secondNum));

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

let thirdNum = jumanji(firstNum, secondNum);

let multiplyThree = (num1, num2, num3) => {
  const num4 = num1 * num2 * num3;
  return (num4 % 3 == 0) ? `${num4} ZEBRA` : 'no zebra';
}

alert(multiplyThree(firstNum, secondNum, thirdNum));

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
