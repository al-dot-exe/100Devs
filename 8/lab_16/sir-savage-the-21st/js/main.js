//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?

const savagePrint = document.querySelector('#savageSays');

function savage() {
  for (let i = 1; i <= 21; i++) {
     console.log(21);
   savagePrint.innerText += '21\n';
  }
}

savage();
