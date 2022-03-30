const andiNext = document.querySelector('#andiNext');
const claireNext = document.querySelector('#claireNext');
const sharleenNext = document.querySelector('#sharleenNext');

const contestantTitles = document.querySelectorAll('h2');
const contestantImages = document.querySelectorAll('img');

contestantTitles.forEach(c => { 
  const contestant = c;

  contestant.addEventListener('click', () => {
    if (contestant.id == 'andiNext') {
      document.getElementById('andi').classList.toggle('hidden');

      contestantImages.forEach(img => { 
        if (img.id != 'andi' && !(img.classList.contains('hidden'))) {
          img.classList.toggle('hidden');
        }
      });
    }
    else if (contestant.id == 'claireNext') {
      document.getElementById('claire').classList.toggle('hidden');

      contestantImages.forEach(img => { 
        if (img.id != 'claire' && !(img.classList.contains('hidden'))) {
          img.classList.toggle('hidden');
        }
      });
    }
    else if (contestant.id == 'sharleenNext') {
      document.getElementById('sharleen').classList.toggle('hidden');

      contestantImages.forEach(img => { 
        if (img.id != 'sharleen' && !(img.classList.contains('hidden'))) {
          img.classList.toggle('hidden');
        }
      });
    }
  })
});

