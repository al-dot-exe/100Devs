// Event listeners
const update = document.querySelector('#update-button');
const deleteButton = document.querySelector('#delete-button');
const messageDiv = document.querySelector('#message');

update.addEventListener('click', changeQuote);
deleteButton.addEventListener('click', deleteQuote);

// PROMISE CHAIN
// update.addEventListener('click', _ => {
//   fetch('/quotes', {
//     method: 'put',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       name: 'Hagrid',
//       quote: 'You\'re a wizard Harry!'
//     })
//   })
//   .then(res => {
//       if (res.ok) return res.json();
//   })
//   .then(response => window.location.reload(true))
// });


// First ASYNC/AWAIT functions 0.- !?

// Updating
async function changeQuote() {
  // await functions
  try {
    let res = await fetch('/quotes', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Yoda',
        quote: "May the force be with you!!!"
      })
    });

    if (res.ok) {
      let result = await res.json();
    }
    window.location.reload(true);

  } catch (err) {
    alert(err);
  }
}

// Deleting
async function deleteQuote() {
  try {
    let res = await fetch('/quotes', {
      method: 'delete',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Yoda'
      })
    });

    if (res.ok) {
      let result = await res.json();
      (result == 'No quotes to delete') 
      ? messageDiv.textContent = 'No Yoda quotes to delete' 
      : window.location.reload(true);
    }
  } catch (err) {
    alert(err)
  }
}
