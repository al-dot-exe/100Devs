// // *Variables*
// // Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
// let sentence = 'This is my sentence?';
// if (sentence[sentence.length - 1] == '?') {
//   alert(sentence);
// }
//
// //Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
// let multipleWords = 'This is my multiple word string I am now a jr. dev';
// // let softwareEngineer = multipleWords.split(' ').map(function(word) {
// //   if (word.toLowerCase() == 'jr.') word = 'Sr.';
// //   if (word.toLowerCase() == 'dev') word = 'Software Engineer';
// // }).join(' ');
//
// console.log(multipleWords.replaceAll('jr. dev', 'software engineer'));
//
// // *Functions*
// // Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissors() {
  const result = Math.random();
  switch(result) {
    case(result < 0.33):
      return 'rock';
    case(result > 0.66):
      return 'paper';
    default:
      return 'scissors';
  }
}


// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function rpsGame(usrChoice) {
  let pcChoice = rockPaperScissors();
  const usrChoice = usrChoice.toLowerCase();
  if ((playerChoice === 'rock' && pcChoice ==='scissors') ||
  (playerChoice === 'paper' && pcChoice ==='rock') ||
  (playerChoice === 'scissors' && pcChoice ==='paper')) {
    console.log('Winner');
  }else if ( playerChice === pcChoice) {
    console.log('TIED!');
  }else {
    console.log('Loser!');
  }
}
rpsGame('paper');

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
