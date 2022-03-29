// Musketeers
// Write a program that:
//
//     Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
//     Shows each array element using a for loop.
//     Adds the "D'Artagnan" value to the array.
//     Shows each array element using the forEach() method.
//     Remove poor Aramis.
//     Shows each array element using a for-of loop.
// 

// let musketeers = ["Athos", "Porthos", "Aramis"];
//
// alert('Behold the musketeers!');
//
// for(let i = 0; i < musketeers.length; i++){
//   alert(musketeers[i]);
// }
// musketeers.push("D'Artagnan");
//
// alert('Again with one added');
// musketeers.forEach(musketeer => alert(musketeer));
//
// musketeers = musketeers.filter(musketeer => musketeer !== 'Aramis');
//
// alert('Now without Aramis');
// for(let musketeer of musketeers) {
//   alert(musketeer);
// }

// Sum of Values
// Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).
let values = [3, 11, 7, 2, 9, 10];
const sum = values.reduce((total, currentNum) => total + currentNum, 0);
console.log(sum);

// Array maximum
// Write a program that creates the following array, then calculates and shows the array's maximum value.
const sortedValues = values.sort((a, b) => a - b);
console.log(sortedValues[sortedValues.length -1]);


// List of words
//
// Write a program that asks the user for a word until the user types "stop". The program then shows each of 
// these words, except "stop".

let usrInput = 'start';
while(usrInput.toLowerCase() !== 'stop') {
  usrInput = prompt('Enter stop');
}
