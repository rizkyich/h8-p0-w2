// 1. Melakukan Looping Menggunakan While Do

var loopCount1 = 0;
var loopCount2 = 20;

console.log('LOOPING PERTAMA');
while (loopCount1 < 20) {  
  loopCount1 += 2
  console.log(loopCount1 + ' - I love Coding');
}

console.log('LOOP KEDUA');
while (loopCount2 > 0) {
  console.log(loopCount2 + ' - I will become fullstack developer');
  loopCount2 -= 2
}


// 2. Melaukan Looping Menggunakan FOR

console.log('LOOPING PERTAMA');

for (var i = 1; i <= 20; i++) {
  console.log(i + ' - I love coding');
}

console.log('LOOPING KEDUA');

for (var i = 20; i > 0; i--) {
  console.log(i + ' - I will become fullstack developer');
}


// 3. Angka Ganjil dan Genap

console.log('Perulangan ganjil dan genap');
for (var i = 1; i <= 100; i++) {
  if (i % 2 == 0 ) {
    console.log(i + ' genap');
  } else {
    console.log(i + ' ganjil');
  }
}

console.log('Kelipatan 3, counter 2');
for (var i = 1; i <= 100; i+=2) {
  if (i % 3 == 0) {
    console.log('3 KELIPATAN ' + i);
  }
}

console.log('Kelipatan 6, counter 5');
for (var i = 1; i <= 100; i+=5) {
  if (i % 6 == 0) {
    console.log('6 KELIPATAN ' + i);
  }
}

console.log('Kelipatan 10, counter 9');
for (var i = 1; i <= 100; i+=9) {
  if (i % 10 == 0) {
    console.log('10 KELIPATAN ' + i);
  }
}