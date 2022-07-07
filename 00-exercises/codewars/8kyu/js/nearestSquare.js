// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.
//
// Goodluck :)
//
// Check my other katas:
//
// Alphabetically ordered
//
// Case-sensitive!
//
// Not prime numbers
function nearestSq(n){
  if (Number.isInteger(Math.sqrt(n))) {
    return n;
  }
  else {
    let found = false;
    let i = 1;
    while (!(found)) {
      let up  = n + i
      let down = n - i;
      if (Number.isInteger(Math.sqrt(up))) found = up;
      if (Number.isInteger(Math.sqrt(down))) found = down;
      if (Number.isInteger(Math.sqrt(up)) && Number.isInteger(Math.sqrt(down))) found = `${up} & ${down} :0`;
      i++;
    }
    return found
  }
}
