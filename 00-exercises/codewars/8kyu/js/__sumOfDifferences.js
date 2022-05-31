// Your task is to sum the differences between consecuitve pairs in the array in descending order.
//
// Example// [2, 1, 10] --> 9
// (10 - 2) + (2 - 1) = 9
//
//FIRST ATTEMPT
//
// function sumOfDifferences(arr) {
//   arr = arr.sort((a, b) => b - a);
//   
//   let result = arr.reduce((acc, num, index) => { 
//     acc + (+num - arr[index + 1]),
//     0
//   });
//   return result;
// }
// This was wrong will attempt again down the road
