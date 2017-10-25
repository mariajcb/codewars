// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  if (number%2===0) {
    return "Even";
  }
  else {
    return "Odd";
  }
}

// note to self: use ternary next time
//function even_or_odd(number) {
//   return number % 2 ? "Odd" : "Even"
// }

$(document).ready(function(){
  var iOS = false,
  p = navigator.platform;
  if( p === 'iPad' || p === 'iPhone' || p === 'iPod' ) {
     iOS = true;
     $("input[type=button]").hide();
  }
  if (iOS === false) {
     $("input[type=button]").hide();
  }
});
