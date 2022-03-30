//Create an array of movie titles. Loop through the array and each element to the h2.
movies = ['matrix', 'matrix reloaded', 'matrix revolution'];

movies.forEach( movie => { 
  document.querySelector('h2').textContent += `${movie} | `;
});

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let numbers = [1, 2, 3, 4, 5]
numbers = numbers.map( num => num += 3 );

// Should do type coercion
let sum;

//Find the average of all the numbers from question three
numbers.array.forEach(e => {
  sum += e;
});

console.log(sum/numbers.length)
