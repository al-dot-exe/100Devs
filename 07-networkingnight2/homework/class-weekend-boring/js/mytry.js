const btn = document.querySelector('#check');

weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

btn.addEventListener('click', showDayMood);

document.addEventListener('keydown', function (event) {
  if (event.key == "Enter") {
    showDayMood();
    event.preventDefault();
  }
});

function showDayMood() {
  const currentDay = document.querySelector('#day').value.toLowerCase();

  result = document.querySelector('#placeToSee');

  if (!(weekdays.includes(currentDay))) {
    result.innerText = "Please Enter a Valid Day!";
  }
  else if (weekdays.indexOf(currentDay) == 0 || weekdays.indexOf(currentDay) == 6) {
    result.innerText = "It's the weekend!";
  }
  else if (weekdays.indexOf(currentDay) % 2 == 0) {
    result.innerText = "It's class day!";
  }
  else {
    result.innerText = "It's a study day!";
  }
}
