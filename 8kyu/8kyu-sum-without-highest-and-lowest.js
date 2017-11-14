// Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
// (The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)
//
// Example:
//
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
//
//
// If array is empty, null or None, or if only 1 Element exists, return 0.

function sumArray(array) {
  //validate
  if (array == null || array.length <= 1) {
    return 0;
  } else {
    //sort array values lowest to highest
    var sorted = array.sort(function(a, b) {
      return (a - b);
    });
    //take out the first and the last value
    var sliced = array.slice(1, -1);
    //reduce what's left
    var sum = sliced.reduce(function(a, b) {
      return a + b;
    }, 0);
    return sum;
  };
};

//rewrite in ES6
var sumArray = array => (array == null || array.length <= 1) ? 0 : array.sort((a, b) => a - b).slice(1, -1).reduce((a, b) => a + b, 0);
