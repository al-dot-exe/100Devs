// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favoriteFood = 'prunes';
favoriteFood = 'ramen';

alert(favoriteFood);

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let stringVar = 'string';
alert(string.split('')[1]);

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function divTwoMultiLast(one, two, three) {
  alert((one / two) * three);
}
divTwoMultiLast(5, 2, 5);

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
let cubeRoot = (num) => {
  num1 ** (1/3)
};

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function checkMonth(month) {
  summer = ['june', 'july', 'august'];
  return summer.includes(month) ? 'YAAYY' : 'Booo';
}


//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function printByFive(num1) {
  for(let i = 1; i <= num1; i++) {
    if (i % 5 !== 0) console.log(i);
  }
}
