// This time no story, no theory. The examples below show you how to write function accum:
//
// Examples:
//
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  var array = [];
  for (var i = 0; i < s.length; i++) {
    array.push(format(s[i], i + 1));
  }
  return array.join('-');
}

function format(s, num) {
  let first = s.toUpperCase();
  while (first.length !== num) {
    first += s.toLowerCase();
  }
  return first;
}

//top Codewars solution
function accum(s) {
  return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
}

// another top solution
function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
