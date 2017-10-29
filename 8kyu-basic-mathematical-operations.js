// Your task is to create a function - basic_op().
//
// The function should take three arguments - operation(string/char), value1(number), value2(number). The function should return result of numbers after applying the chosen operation.
//
// Examples:
//
// basicOp('+', 4, 7)         // Output: 11
// basicOp('-', 15, 18)       // Output: -3
// basicOp('*', 5, 5)         // Output: 25
// basicOp('/', 49, 7)        // Output: 7

//the silly way for people who can't remember how to write a switch case
function basicOp(operation, value1, value2)
{
  if (operation === '+') {
    return value1+value2;
  } else if (operation === '-') {
    return value1-value2;
  } else if (operation === '*') {
    return value1*value2;
  } return value1/value2;
}

//congrats here's a switch case
function basicOp(operation, value1, value2)
{
  switch (operation) {
    case '+':
      return value1 + value2;
      break;
    case '-':
      return value1 - value2;
      break;
    case '*':
      return value1 * value2;
      break;
    case '/':
      return value1 / value2;
      break;
  }
}

//a codewars solution that blew my mind
function basicOp(o, a, b) {
  return eval(a+o+b);
}
//ended up having to read up on dangers of eval
