// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
const digitize = num => String(num).split('').reverse().map(num => Number(num));
