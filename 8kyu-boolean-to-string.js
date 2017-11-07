// Complete the bool_to_word (PHP: boolToWord ) method.
//
// Given: a boolean value
//
// Return: a 'Yes' string for true and a 'No' string for false

function boolToWord( bool ){
  if (bool === true) {
    return 'Yes';
  } else
  return 'No';
}

//ES6+ternary
let boolToWord = bool => bool ? 'Yes' : 'No' 
