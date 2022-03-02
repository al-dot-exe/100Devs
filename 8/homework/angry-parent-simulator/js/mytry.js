const fName = document.getElementById('firstName').value;
const fMiddleName = document.getElementById('firstMiddle').value;
const lMiddleName = document.getElementById('lastMiddle').value;
const lName = document.getElementById('lastName').value;

const yellButton = document.getElementById('yell');

yellButton.addEventListener('click', yell)

function yell() {
  const fullName = `${fName} ${fMiddleName} ${lMiddleName} ${lName}`;
  document.getElementById('placeToYell').innerText = fullName;
}
