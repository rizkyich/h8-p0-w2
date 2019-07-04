function xo(str) {
  // you can only write your code here!
  var totalX = 0;
  var totalO = 0;
  
  for (var i = 0; i < str.length; i++) {
    if (str[i] == 'x') {
      totalX += 1;
    } else {
      totalO += 1;
    }
  }
  return totalX == totalO;
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true