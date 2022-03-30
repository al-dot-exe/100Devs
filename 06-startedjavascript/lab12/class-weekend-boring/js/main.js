document.querySelector("#check").addEventListener("click", check);

function check() {
  const day = document.querySelector("#day").value;

  //Conditionals go here
  if (day === "Saturday" || day === "Sunday") {
    alert('Weekend day')
  }else if (day === "Tuesday" || day === 'Thursday') {
    alert('Class day')
  }else {
    alert('Boring day')
  }
}
