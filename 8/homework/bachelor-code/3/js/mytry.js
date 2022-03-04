const contestants = document.querySelectorAll('.contestant');

const claire = document.getElementById('claire');
const nikki = document.getElementById('nikki');


contestants.forEach(contestant => {
  contestant.addEventListener('click', () => {
    contestant.classList.contains('rose') ? nikki.classList.toggle('hidden') : alert('Wrong!!!');
  });
});

