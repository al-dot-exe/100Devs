//Create a constructor with 4 properties and 3 methods

function Pizza(sauce, toppings, crust, size){
  this.sauce = sauce;
  this.toppings = toppings;
  this.crust = crust;
  this.size = size;

  this.burnMouth = _ => console.log("I'll be ready soon");
  this.startSteaming = _ => console.log("I'm pipin hot!");
  this.screamWhenBitin = _ => console.log("The pain is unbearable!");
}

let papaJohns = new Pizza();

PizzaMachine.prototype.cheese = false;
