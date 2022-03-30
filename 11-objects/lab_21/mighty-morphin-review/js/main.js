// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
// let myFavHoliday = 'ground hogs';
// myFavHoliday = 'Thanksgiving';
// console.log(myFavHoliday.toUpperCase());

// //Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
// let string = 'string';
// alert(string.slice(-3));

// // *Functions*
// // Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
// function OneHunnedMinusfiveNumbers(n1, n2, n3, n4, n5) {
//   result = 100 - n1 - n2 - n3 - n4 - n5
//   return Math.abs(result);
// }
// OneHunnedMinusfiveNumbers(5, 3, 4, 5, 1000);

// // Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
// function lowestNdHighest(num1, num2, num3) {
//   console.log(`${Math.min(num1, num2, num3)} is the lowest \n${Math.max(num1, num2, num3)} is the highest`);
// }

// // *Conditionals*
// //Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headsOrTails(){
  let result = Math.random() < 0.5 ? 'heads ' : 'tails ';
  return result;
}
// console.log(headsOrTails());

// /#<{(|Loops*
// //Create a function that takes in a number. Console log the result of heads or tails using the previous 
// //function x times where x is the number passed into the function. Call the function.

function takeNumber(num) {
  // console.log(headsOrTails().repeat(num));
  for(let i = 1; i <= num; i++) {
    console.log(headsOrTails());
  }
}
takeNumber(5);
