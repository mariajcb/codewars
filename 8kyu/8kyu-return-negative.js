// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
//
// Example:
//
// makeNegative(1); // return -1
// makeNegative(-5); // return -5
// makeNegative(0); // return 0
// Notes:
//
// The number can be negative already, in which case no change is required.
// Zero (0) can't be negative, see examples above.

function makeNegative(num) {
  if (num === 0){
    return 0;
  } else if (num >= 0) {
    return -num;
  } else return num;
}

// what if ternary?
let makeNegative = (num) => { return num === 0 ? 0 : num >= 0 ? -num : num };
//and actually, I don't need to make it return 0 if num is 0, because that is the actual num

// wow, turns out there's a method for this
function makeNegative(num) {
  return -Math.abs(num);
}
