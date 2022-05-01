//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. 
//Please create a function that reverses your list and prints it to the console. 
let myPokemon = ['gasly', 'bulbasaur', 'hitmochan'];
function reversePokemonParty(party) {
  let newParty = [];
  party.forEach(pokemon => newParty.unshift(pokemon));
  return newParty;
}

console.log(reversePokemonParty(myPokemon));

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum 
//of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
let numArrOne = [2, 2 ,2];
let numArrTwo = [2, 2, 2];

function compareArraySumOfExponents(a, b) {
  const aSumofSquares = a.reduce((acc, num) => +acc + (num ** 2));
  const bSumofCubes = b.reduce((acc, num) => +acc + (num ** 3));
  return aSumofSquares > bSumofCubes;
}

console.log(compareArraySumOfExponents(numArrOne, numArrTwo));

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
function indexMultiples(arr){
  let multiplesOnly = arr.filter((e, i) => Math.abs(e % i) === 0);
  return multiplesOnly;
}

console.log(indexMultiples([22, -6, 32, 82, 9, 25]));

//Given an array of integers as strings and numbers, return the sum of the array values as 
//if all were numbers.Return your answer as a number.

function sumAllTypes(arr) {
  return arr.reduce((acc, num) => +acc + +num);
}

console.log(sumAllTypes(['5', 3, '2', 1]));
