//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function returnEvens(ogArr) {
  evenArr = [];
  // for(let i = 0; i < ogArr.length; i++) {
  //   if(ogArr[i] % 2 == 0) evenArr.push(ogArr[i]);
  // }
  for(let i of ogArr ) {
    if(i % 2 == 0) evenArr.push(i);
  }
  return evenArr
}

returnEvens([1, 2, 3, 4, 5])
