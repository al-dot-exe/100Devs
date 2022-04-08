//Create a pizza object that has four properties and three methods

let pizza = {
  cheeze: 'mozzarella',
  bread: 'gluten-free',
  sauce: 'pesto',
  name: 'best pizza around',

  //method
  tasteGood: function(){
    console.log('You bet I do');
  },
  bake: () => console.log("It's getting hot!!!"),
  getServed: () => console.log("I'm ready to be eatin!!!")
}

