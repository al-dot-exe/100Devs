//Complete the function that takes a non-negative integer n as input, 
//and returns a list of all the powers of 2 with the exponent ranging 
//from 0 to n ( inclusive ).

function powersOfTwo(n){
  if (n < 0) {
    return 'Invalid number passed in';
  } else {
    powerArray = [];
    let i = 0;
    do{
      powerArray.push(2 ** i);
      i++;
    }while (n >= i);
      
    return powerArray;
  }
}
