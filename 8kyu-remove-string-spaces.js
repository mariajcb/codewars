// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
  return x.replace(/\s/g, "");
}

console.log(noSpace('8aaaaa dddd r     '));
