//Create a stopwatch object that has four properties and three methods
let stopwatch = {}
stopwatch.currentMinute = 2;
stopwatch.currentSeconds = 30;
stopwatch.screenOn = false;
stopwatch.button = false;

stopwatch.turnScreenOn = _ => stopwatch.screenOn = true; // stuff;

stopwatch.start = function () {
  console.log('starting time');
  stopwatch.button = true;

}
stopwatch.stop = function() {
  console.log('stopping time');
  stopwatch.button = false;
}
