// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, except in C, where, to keep the difficulty at the level of the kata, you are given two parameters, the first a buffer with length exactly the same as the second parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
 var arr=str.split('');
 var shifted = arr.shift();
 var popped = arr.pop();
 return arr.join('');
};

//codewars top solution: are you serious
function removeChar(str) {
  return str.slice(1, -1);
};
//I forgot slice.  Wow.
//I'm keeping these comments to myself for posterity, by the way.
