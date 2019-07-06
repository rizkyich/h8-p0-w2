// 1. Menyusun Barisan Bintang

var row1 = 5;

for (var a = 0; a < row1; a++) {
  console.log('*');
}


//2. Menyusun Barisan Bintang Dengan Nested Looping

var row2 = 5;

for (var i = 0; i < row2; i++) {
  var star = '';
  for (var j = 0; j < row2; j++) {
    star += '*';
  }
  console.log(star);
  star = '';
}


//2. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var row3 = 5;

for (var k = 0; k < row3; k++) {
  var star2 = '';
  for (var l = 0; l <= k; l++) {
    star2 += '*';    
  }
  console.log(star2);
  star2 = '';
}
