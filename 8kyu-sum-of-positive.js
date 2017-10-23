// You get an array of numbers, return the sum of all of the positives ones.
//
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
//
// Note: array may be empty, in this case return 0.

// Solved it three ways:
function positiveSum(arr) {
  var count = 0;
	for (var i=0; i <= arr.length; i++) {
		if (arr[i] >= 0) {
			count += arr[i];
		}
	}
	return count;
}

// but what if higher order functions?
function positiveSum(arr) {
  let pos_arr=arr.filter(a => a>=0);
  let sum = pos_arr.reduce((a, b) => a+b, 0);
  return sum;
  }

// what if higher order functions but I don't overcomplicate it?
function positiveSum(arr) {
  return arr.filter(a => a>=0).reduce((a, b) => a+b, 0);
}
