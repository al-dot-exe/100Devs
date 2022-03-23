//Arrays

//Create and array of tv shows. Loop through and print each show to the console
// shows = ['breaking bad', 'sopranos', 'peaky blinders']
// for(show in shows) {
//   console.log(shows[show]);
// }
//Create and array of numbers
let numbers = [1, 2, 3, 4, 5];

//Return a new array of numbers that includes every even number from the previous Arrays
// let evens = numbers.filter( number => number % 2 === 0);
// console.log(evens);

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function sumSecondLowAndHigh(arr) {
  let sorted = arr.sort((a,b) => a-b);
  alert(`${sorted[1]} is the lowest \n${sorted[sorted.length - 2]} is the highest`);
}
sumSecondLowAndHigh(numbers);

