//---Easy
//create a function that subtracts two numbers and alerts the difference
let subtractTwoNums = (num1, num2) => alert(num1 - num2);
subtractTwoNums(2, 1);

//create a function that divides three numbers and console logs the quotient
let divideThreeNumbers = (num1, num2, num3) => console.log(num1 / num2 / num3);
divideThreeNumbers(12, 4, 3);

//create a function that multiplys three numbers and returns the product
let multiplyThreeNumbers = (num1, num2, num3) => num1 * num2 * num3;
let product = multiplyThreeNumbers(5, 10, 2);

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function addTwoAndMod(num1, num2, num3) {
  let workingNum = num1 + num2;
  return workingNum % num3;
}

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function weirderMath(num1, num2, num3, num4) {
  let workingNum1 = num1 * num2;
  if (workingNum1 > 100) { 
    // do stuff
  }
}
