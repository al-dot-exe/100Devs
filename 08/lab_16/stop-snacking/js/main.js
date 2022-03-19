//Create a function that grabs the number of snacks from the input and tells you to stop that many times

const helpButton = document.querySelector("#help");
const stopSpot = document.querySelector("#stops");

helpButton.addEventListener("click", stopSnacking);

function stopSnacking() {
  stopSpot.innerText = "";

  const numberOfSnacks = document.querySelector("input").value;

  for (let i = Number(numberOfSnacks); i > 0; i--) {
    stopSpot.innerText += "  Stop Snacking!";
  }
}
