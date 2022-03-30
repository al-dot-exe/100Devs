//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let numberArray = [1, 2, 3, 4, 5]
let sum = numberArray.reduce((acc, num) => acc + num, 0);
alert(sum);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
const squaredNumbers = numberArray.map(num => num ** 2);

//Create a function that takes string
//Print the reverse of that string to the console
function reverseString(str) {
  let reverseStr = []
  for (let char of str) {
      reverseStr.unshift(char);
  }
  return reverseStr.join('');
}
console.log(reverseString('string'));

//Create a function that takes in a string
//Alert if the string is a palindrome or not

const isPalindrome = function(str) {
 if(str === reverseString(str)) alert(`${str} is a plaindrome`);
}

isPalindrome('racecar');
