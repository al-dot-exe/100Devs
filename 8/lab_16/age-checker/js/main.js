//Create a conditonal that checks their age

const age = document.querySelector('#danceDanceRevolution').value;
let answer;

//If under 16, tell them they can not drive
switch(true) {
  case age <= 16:
    answer = "You can't drive yet";
    break;
//If under 18, tell them they can't hate from outside the club, because they can't even get in
  case age <= 18:
    answer = "You can't hate from outside the club, because they can't even get in";
    break;
//If under 21, tell them they can not drink
  case age <= 21:
    answer = "You can't drink";
    break;
//If under 25, tell them they can not rent cars affordably
  case age <= 25:
    answer = "You can't rent cars affordably";
    break;
//If under 30, tell them they can not rent fancy cars affordably
  case age <= 30:
    answer = "You can't rent fancy cars affordably";
    break;
//If under over 30, tell them there is nothing left to look forward too
  case age > 30:
    answer = 'There is nothing left to look forward too. Except learning code!';
    break;
}
console.log(answer);

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

const h1 = document.querySelector('h1');

h1.addEventListener('click', addToParagraph);

function addToParagraph() {
  document.querySelector('p').innerText = answer;
}
