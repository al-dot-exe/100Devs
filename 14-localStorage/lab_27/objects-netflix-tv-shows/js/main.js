//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NetflixTvShow{
  constructor(genre, rating, logo, title){
    this.screen = genre;
    this.playButton = rating;
    this.logo = logo;
    this.volume = title;
  }

  play = _ => console.log('Playing show');
  stop = _ => console.log('Stopping program');
  skipIntro = _ => console.log('Skipping');

}

let blackMirror = new NetflixTvShow('scifi horror', '99%', 'blackMirror logo', 'Black Mirror')

