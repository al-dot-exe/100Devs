//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', getAPOD())

function getAPOD(){
  const nasaPictureOfDay = fetch('https://api.nasa.gov/planetary/apod?api_key=A5wFDj5rJ7ZrafwFQ6k5Lxa7jyrDrTrfVWzLm8Ur') // query with api key
  .then(res => res.json()) // grabs data in json format
  .then(data => {
    console.log(data);
     document.querySelector('img').src = data.url; // places image on page
    document.querySelector('.description').textContent = data.explanation;
  })
  .catch(err => {console.log(`error ${err} occured`)
  });
}

