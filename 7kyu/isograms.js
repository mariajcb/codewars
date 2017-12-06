// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
//
// isIsogram( "Dermatoglyphics" ) == true
// isIsogram( "aba" ) == false
// isIsogram( "moOse" ) == false // -- ignore letter case

function isIsogram(str){
  if (str.length === 0) {
    return true;
  } else {

  let arr = str.toLowerCase().split("");

  for (var i = 0; i < arr.length; i++) {
    let check = arr[i];

    let count = arr.reduce(function(n, val){
      return n + (val === check);
    }, 0);

    if (count > 1) {
      return false;
    }
  }
  return true;
 }
}

// top codewars solutions
function isIsogram(str){
  return !/(\w).*\1/i.test(str)
}

//I have no idea how that one ^ works, but all right

function isIsogram(str){
  var i, j;
  str = str.toLowerCase();
  for(i = 0; i < str.length; ++i)
    for(j = i + 1; j < str.length; ++j)
      if(str[i] === str[j])
        return false;
  return true;
}
//are double loops even legal?
