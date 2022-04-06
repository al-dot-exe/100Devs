// Coding challenges from chapter 06 Create your first objects

// 1
// Adding character experience
//
// Improve our example RPG program to add an experience property named xp 
// to the character. Its initial value is 0. Experience must appear in 
// character description.


// TODO: create the character object here: finished
// const aurora = {
//   name: "Aurora",
//   health: 150,
//   strength: 25,
//   xp: 0,
//
//   // Return the character description
//   describe() {
//     return `${this.name} has ${this.health} health points and ${this
//       .strength} as strength and ${this.xp} XP points`;
//   }
// }
//
// // Aurora is harmed by an arrow
// aurora.health -= 20;
//
// // Aurora equips a strength necklace
// aurora.strength += 10;
//
// // Aurora learn a new skill
// aurora.xp += 15;
//
// console.log(aurora.describe());
//

// 2
// Complete the following program to add the dog object definition.
// TODO: create the dog object here : finished

// With a constructor function

// function dog(name, species, size){
//   this.name = name;
//   this.species = species;
//   this.size = size;
//   // bark = function() {
//   //   return "Grrrrr!";
//   // }
//   // Don't know how to add these
// }
//   dog.bark = _ => "Grrr! Grrr!"; //Method creation
//
//
// let fang = new dog();
// fang.name = 'Fang';
// fang.species = 'boarhound';
// fang.size = 75;
//
// console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
// console.log(`Look, a cat! ${fang.name} barks: ${dog.bark()}`);


// 3 
// Complete the following program to add the circle object definition. 
// Its radius value is input by the user.
// const r = Number(prompt("Enter the circle radius:"));
//
// // TODO: create the circle object here
//
// // With object literal notation
// const circle = {
//   radius: 0,
//
//   area() {
//   return (this.radius ** 2) * Math.PI;
//   },
//
//   circumference() {
//   return 2 * Math.PI * this.radius;
//   }
// }
//
// circle.radius = r;
//
// console.log(`Its circumference is ${circle.circumference()}`);
// console.log(`Its area is ${circle.area()}`);


// 4
// Write a program that creates an account object with the following characteristics:
//
// A name property set to "Alex".
// A balance property set to 0.
// A credit method adding the (positive or negative) value passed as an 
// argument to the account balance.
// A describe method returning the account description.
//
// Use this object to show its description, crediting 250, debiting 80, 
// then show its description again.

// owner: Alex, balance 0"
// owner: Alex, balance 175"

function BankAccount(owner, accountBalance) {
  this.owner = owner,
  this.accountBalance = accountBalance

  this.describe = function() {
    console.log(`owner: ${this.owner}, balance ${this.accountBalance}`);
  }
  this.creditAccount = (amount) => this.accountBalance += amount;
}


let myAccount = new BankAccount();
myAccount.owner = 'Alex';
myAccount.accountBalance = 0;

myAccount.creditAccount(175);
myAccount.describe();
