// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
//
// Examples:
//
// Input: 21445 Output: 54421
//
// Input: 145263 Output: 654321
//
// Input: 1254859723 Output: 9875543221

function descendingOrder(n){
  let notReallyArr = (''  + n).split('').sort((a, b) => b - a).join('');
  return parseInt(notReallyArr);
}

//top Codewars solution
function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}

//a top one that is similar to mine
function descendingOrder(n){
  return +(n + '').split('').sort(function(a,b){ return b - a }).join('');
}
