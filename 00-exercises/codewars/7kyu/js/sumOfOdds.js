// Given the triangle of consecutive odd numbers:
//
//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
//
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
//
// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
  // PREP
  // P - the specified row n of odd numbers
  // R - The sum of all the numbers in the row
  // E - input(2) -> output 3 + 5 = 8
  // P:
  // init an empty array numbers
  // init currentOddNumber = 1
  // loop from i = 1 to n
  // -- make sure array is empty
  // -- loop through j = i times
  // -- -- push currentOddNumber to numbers
  // -- -- currentOddNumber = currentOddNumber + 2
  // sum values in numbers array together and return result
  
  let numbers = [];
  let currentOddNumber = 1;
  for(let i = 1; i <= n; i++){
    numbers = [];
    for(let j = i; j > 0; j--){
      numbers.push(currentOddNumber);
      currentOddNumber += 2;
    }
  }
  return numbers.reduce((acc, num) => acc + num, 0);
}
