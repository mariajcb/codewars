// x Simple, given a string of words, return the length of the shortest word(s).
//
// String will never be empty and you do not need to account for different data types.

function findShort(s){
  let arr = s.split(" ");
  let short =  Math.min(...arr.map(({ length }) => length));
  return short;
}

// top codewars solutions
function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}

function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}
