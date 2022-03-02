// Will find out how to use this later
const contestants = document.querySelector('#contestants').childNodes;

const claire = document.querySelector('#claire');
const nikki = document.querySelector('#nikki');
const sharleen = document.querySelector('#sharleen');
const finalRose = document.querySelector('#finalRose');
const resetButton = document.querySelector('#reset');

finalRose.addEventListener('click', showWinner);
resetButton.addEventListener('click', startOver);

function showWinner(){
  claire.style.display = 'none';
  sharleen.style.display = 'none';
}

function startOver(){
  claire.style.display = 'inline';
  sharleen.style.display = 'inline';
}

// OR

// TRYING TO DO SOMETHING WITH A LOOP DOWN HERE
// function startOver(){
//   contestants.forEach(contestant => {
//   });
// }
