//Write your pseduo code first!

const button = document.querySelector('#btn');

button.addEventListener('click', convertToFair);

function convertToFair() {
  const selTemp = document.querySelector('#sel').value;
  const fairTemp = parseInt(selTemp) * (9/5) + 32;
  document.querySelector('#result').innerText = fairTemp;
}
