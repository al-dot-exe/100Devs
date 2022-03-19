const fN = document.querySelector('#firstName');
const fM = document.querySelector('#firstMiddle');
const sM = document.querySelector('#lastMiddle');
const lN = document.querySelector('#lastName');

document.querySelector('#yell').addEventListener('mouseup', shout);

function shout() {
  const fullName = `${fN.value} ${fM.value} ${sM.value} ${lN.value}`;
  const placeToYell = document.querySelector('#placeToYell');
  placeToYell.innerText = fullName;
  placeToYell.style.color = "pink";
}

