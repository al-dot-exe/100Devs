// Create Button node list
const convertButtons = document.querySelectorAll('.convertBTN');

let placeForTemp = document.querySelector('#placeForTemp');

const temp = document.querySelector('#temp').value;

convertButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    let result;
    if (btn.classList.contains('toFahren')) {
      result = temp * (9/5) + 32;
    }
    else if (btn.classList.contains('toCelsius')) {
      result = temp - 32 * (5/9);
    }
    placeForTemp.innerText = result.toFixed(2);
  });
});


// NOT WORKING 

