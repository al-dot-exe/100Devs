// *Variables*
// Declare a variable, assign it a value, and alert the value
let num;
num = 20;
alert(num);

// Create a variable, divide it by 10, and console log the value
let num1 = 100;
num1 /= 10;
console.log(num1);

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multiply3Numbers (one, two, three) {
  alert(one * two * three);
}
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function addTwoSubtractTwo(one, two, three, four) {
  const sumOfFirstTwo = one + two;
  const diffOfLastTwo = three - four;
  `${sumOfFirstTwo} and ${diffOfLastTwo}`;
}

console.log(addTwoSubtractTwo(1, 2, 3, 4));

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
