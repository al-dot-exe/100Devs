const listItems = document.querySelectorAll('li');

listItems.forEach(function(li) {
  const color = window.getComputedStyle(li,null).getPropertyValue('background-color');
  const body = document.querySelector('body');

  li.addEventListener("click", () => { body.style.backgroundColor = color; }) 
}); 


// NOTICED CALLING THIS FUNCTION IN THE EVENT LISTENER RESULTED IN THE LAST ITEM IN THE Node
// LIST ONLY BEING CALLED by addEventListener
// function changeBackground(currentColor) {
//   document.querySelector('body').style.backgroundColor = currentColor;
//   document.querySelector('body').style.color = 'black';
// }

