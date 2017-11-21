// Return the number (count) of vowels in the given string.
//
// We will consider a, e, i, o, and u as vowels for this Kata.
//
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  var vowelsCount = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u")
    vowelsCount++;
  }
  return vowelsCount;
}

//top codewars solution
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}
