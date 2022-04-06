// Complete the function that calculates the area of the red square, 
// when the length of the circular arc A is given as the input. 
// Return the result rounded to two decimals.
// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

function squareArea(A){
  // Our goal is to find the length of at least one side knowing the length of the Arc
  // the formula to find the length of an arc is (n/360) * (2PI * radius)
  // we know the angle on the opposite end of A is equal to 90 degrees,
  // thus our formula to find the length of the arc is A = (90/360) * 2PIr
  
  // We can now solve for r, which is the radius of the circle, but also one of our sides!
  const r = ( A * 360) / ((2 * Math.PI) * 90)
  
  //The area of a square is equal to the length times the height, or one side squared
 // returning the rounded result as a number data type.
  return Number((r ** 2).toFixed(2));
}
