//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function MakeCharacter(name, mainTrick, speed, stamina) {
  this.name = name;
  this.mainTrick = mainTrick;
  this.speed = speed;
  this.stamina = stamina;

  // Methods
  jump = _ => console.log('OLLYYY');
  push = _ => console.log('Picking up speed!');
  changeBoard = _ => console.log('changing booard...');
}
