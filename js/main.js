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
  setTimeout(function() {
      toggle(red);
  }, 1000);

  setTimeout(function() {
      toggle(amber);
  }, 3000);
  // it's not turning amber off//

  setTimeout(function() {
      toggle(green);
  }, 4000);
}

var loop = window.setInterval(loop_lights,6000);

// tried setInterval, tried $.each
