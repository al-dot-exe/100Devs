class Animal{
    constructor(name, breed){
        this._name = name;
        this._breed = breed;
    }

    get name(){
        return this._name;
    }

    get breed(){
        return this._breed;
    }
    speak(){
        console.log(`${this._name} makes a sound`)
    }
}

class Dog extends Animal{
    constructor(name, breed){
        super(name, breed);
    }

    speak(){
        super.speak()
        console.log(`${this.name} barks`)
    }    
}

class Cat extends Animal{
    constructor(name, breed){
        super(name, breed);
    }

  speak(){
    super.speak();
    console.log(`${this.name} meows`);
  }
}

class Horse extends Animal{
  constructor(name, breed){
      super(name, breed);
  }

  speak(){
    super.speak();
    console.log(`${this.name} neighs!`);
  }

  gallop(){
    console.log(`${this.name} is galloping`);
  }
}

class Spider extends Animal{
  constructor(name, breed){
    super(name, breed);
  }

  speak(){
    console.log(`${this.name} makes no sound`);
  }

  spinWeb(){
    console.log(`${this.name} is spinning their web`);
  }
}

let simba = new Dog('Simba','Shepard');
let machi = new Dog('The Machine','Pitbull');
let salem = new Cat('Salem', 'American Shorthair');
let seaBiscuit = new Horse('Sea Biscuit', 'Thoroughbred');
let charlotte = new Spider('Charlotte', 'Black Widow');

let farm = [simba,machi,salem,seaBiscuit,charlotte]

for( a of farm ){
    a.speak()
}
