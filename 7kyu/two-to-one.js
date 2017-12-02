// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,
//
// each taken only once - coming from s1 or s2. #Examples: ``` a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz" longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" ```

function longest(s1, s2) {
  let arr = [];
  let temp = s1.concat(s2).split('').sort();
  temp.reduce(function(previous, current){
    if (current !== previous) {
      arr.push(current);
      return current;
    }
    return previous;
  }, 0);
  return arr.join('');
}

//codewars
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

//or

function longest(s1, s2) {
  return Array.from(new Set(s1 + s2)).sort().join('');
}
