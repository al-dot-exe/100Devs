//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value;
  const nasaUrl = `https://api.nasa.gov/planetary/apod?api_key=A5wFDj5rJ7ZrafwFQ6k5Lxa7jyrDrTrfVWzLm8Ur&date=${choice}`

  fetch(nasaUrl)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('img').src = data.hdurl
        document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

