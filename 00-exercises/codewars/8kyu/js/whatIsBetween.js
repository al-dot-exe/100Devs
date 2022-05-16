// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between 
// the input parameters, including them.

function between(a, b) {
  length = b - a + 1;
  return Array.from({length}, (_, i) =>  a + i);
}
