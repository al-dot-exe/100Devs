//Create a button that adds 1 to a botScore stored in localStorage 

if (!(localStorage.getItem('botScore'))) {
  localStorage.setItem('botScore', 0); // set bot score to 0 on page load
}

document.querySelector('button').addEventListener('click', addAnothaOne)

function addAnothaOne() {
  let botScoreVal = localStorage.getItem('botScore');
  botScoreVal++
  localStorage.setItem('botScore', botScoreVal);
}
// function getFetch(){
//   const choice = document.querySelector('input').value;

//   fetch(localStorage)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }



