var red = $('#red');
var amber = $('#amber');
var green = $ ('#green');


// Long way round!
// function colorOn(color) {
//   color.addClass('on');
// }
// function colorOff(color) {
//  color.removeClass('on');
// }

// Toggles the class 'on' on and off
function toggle(color){
  color.toggleClass('on');
}

// Set Timeout only takes function name, no parameters.
// So make your own function inside SetTimeout and run your code!

function loop_lights(){
  console.log('loop lights')
  setTimeout(function() {
      console.log('toggle red');
      toggle(red);
  }, 1000);

  setTimeout(function() {
      console.log('toggle amber');
      toggle(amber);
  }, 3000);
  // it's not turning amber off//

  setTimeout(function() {
      console.log('toggle green');
      toggle(green);
  }, 4000);

  setTimeout(function() {
    toggle(red);
    toggle(amber);
    toggle(green);
  }, 5000)
}

var loop = window.setInterval(loop_lights,6000);
