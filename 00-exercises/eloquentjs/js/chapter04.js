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
  for (let i = arr.length - 1; i >= 0; i--) {
    new_arr.push(arr[i]);
  }
  return new_arr;
}

function reverseArrayInPlace(arr){ 
  for(let j = 0; j < Math.floor(arr.length / 2); j++){
    let firstElement = arr[j];
    let lastElement = arr[arr.length - 1 - j];
    arr[j] = lastElement;
    arr[arr.length - 1 - j] = firstElement;
  }
}


// Doing this one next
// 3 A List
// Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as 
// argument. Also write a listToArray function that produces an array from a list. Then add a helper function 
// prepend, which takes an element and a list and creates a new list that adds the element to the front of 
// the input list, and nth, which takes a list and a number and returns the element at the given position in 
// the list (with zero referring to the first element) or undefined when there is no such element.
//
// If you haven’t already, also write a recursive version of nth.
//


// written out if/else statement
  if (array.length - 1 <= 0) {
    return {value: array[0], rest: null};
  }
  else {
    return {value: array[0], rest: arrayToList(array.slice(1), {})};
  }

//Recursion! with Ternary operator 0.o!

function arrayToList(array, list = {}) {
  list = (array.length - 1 <= 0) ? {value: array[0], rest: null} : { value: array[0], rest: arrayToList(array.slice(1), {})};
  return list
}

function listToArray(list, array = []) {
  for(key in list){
     if(typeof list[key] != 'object') {
      array.push(list[key]);
    }
    else if (list[key] != null){
      listToArray(list[key], array);
      return array;
    }
  }
}

let basicNumbersList = arrayToList([10, 20]);
let basicNumbersArray = listToArray(arrayToList([10, 20, 30]));

console.log(basicNumbersList);
console.log(basicNumbersArray);

