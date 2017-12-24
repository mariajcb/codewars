// Given an array, find the int that appears an odd number of times.
//
// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  let count = 0;
  for (var i = 0; i < A.length; i++) {
      for (var j = 0; j < A.length; j++) {
        if (A[i] === A[j]) {
          count++;
        }
      }
      if (count % 2 != 0) {
        return A[i];
      }
  }
}

//codewars
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

//wow
