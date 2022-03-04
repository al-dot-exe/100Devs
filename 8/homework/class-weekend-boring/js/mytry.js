const checkButton = document.querySelector('#check');
const placeToSee = document.querySelector('#placeToSee');

checkButton.addEventListener('click', showResult);

document.addEventListener('keydown', function (event) {
  if (event.key == "Enter") {
    showResult();
    event.preventDefault();
  }
});

function showResult() {
  const day = document.querySelector('#day').value.toLowerCase();

  switch(true) {
    case (day == 'friday' || day == 'saturday' || day == 'sunday'):
      placeToSee.innerText = "It's the WEEKEND!!!";
      break;
    case (day == 'tuesday' || day == 'thursday'):
      placeToSee.innerText = "It's CLASS DAY";
      break;
    case (day == 'monday' || day == 'wednesday'):
      placeToSee.innerText = "It's a boring day :/";
      break;
    default:
      placeToSee.innerText = "Please enter a valid day";
  }
}
