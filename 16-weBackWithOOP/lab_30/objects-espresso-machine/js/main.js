//Create an espresso machine class that makes machines with 4 properties and 3 methods

class EspressoMachine  {
  constructor(make, model, size, price) {
    this.make = make;
    this.model = model;
    this.size = size;
    this.price = price;
  }
  turnOn = _ => "Turing on espresso machine";
  grind = _ => "Grinding beans";
  turnOff = _ => "Turning off espresso machine";
}

let gaggia = new EspressoMachine('Gaggia', 'Classic Pro', 'big', 600);
