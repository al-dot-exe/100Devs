//Create a mouse object that has four properties and three methods
let mouse = {}

mouse.name = 'Anker';
mouse.leftButton = 'leftButton';
mouse.rightButton = 'rightButton';
mouse.mouseWheel = 'mouseWheel';

mouse.clickLeft = _ => console.log('You clicked left');
mouse.clickRight = _ => console.log('You clicked right');
mouse.mouseWheelUp = _ => console.log('Scrolling up');
mouse.mouseWheelDown = _ => console.log('Scrolling Down');
