// CHAPTER 4 DATA

// 1 Sum of Range
// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
//
// Then, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

console.log(range(1, 10));
console.log(sum(range(1, 10)));

function range(start, end) {
  let i = start;
  let rangeArray = []
  while(i <= end) {
    rangeArray.push(i);
    i++;
  }
  return rangeArray;
}

function sum(array) {
  const i = 0;
  return array.reduce((x, y) => x + y, i);
}

// 2 Reversing Array
// For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an
// array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace,
// does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method

function reverseArray(arr) {
  //stuff
}

function reverseArrayInPlace(arr) {
  // do mutating stuff
}
