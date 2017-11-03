// Write function avg which calculates average of numbers in given list.

function find_average(array) {
  return array.filter(a => a>=0).reduce((a, b) => a+b, 0) / array.length;
}
