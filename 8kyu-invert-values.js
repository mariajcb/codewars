// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
//
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers.


function invert(array) {
   var newArray = [];
   for (var i=0; i < array.length; i++){
      newArray.push(0 - array[i]);
   }
   return newArray;
}

//top Codewars solution
function invert(array) {
   return array.map( x => x === 0 ? x : -x);
}
