// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.


function fakeBin(x){
  var y = ''
  for (var i = 0; i < x.length; i++) {
    if (x[i] < '5')
    {
      y += "0";
    }
     y += "1";
  }
  return y
}

//regex
function fakeBin(x){
  return x.replace(/[1234]/g, '0').replace(/[56789]/g, '1');
}

//top Codewars solution
function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}
