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
  let new_arr = []
  for (let i = arr.length - 1; i > 0; i--) {
    new_arr.push(arr[i]);
  }
  return new_arr;
}

// WRONG!!!
// [1, 2, 3, 4]
// function reverseArrayInPlace(arr) {
//   // starting from middle two elements and working our way outwards
//   let i = Math.ceil((arr.length - 1) / 2); // i == 2
//
//   while(i <= (arr.length - 1)) { //arr.length - 1 == 3
//     //element in first half
//     let firstElement = arr[(arr.length - 1) - (i)]; // == arr[1] first go around
//     //element in last half
//     let lastElement = arr[i]; //== arr[2] first go around
//     arr.unshift(lastElement)
//     arr.push(firstElement);
//     i++;
//   }
// }
