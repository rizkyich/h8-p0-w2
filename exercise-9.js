// TUGAS 1 

function shoutOut() {
  return 'Halo Function!'
}

console.log(shoutOut());


// TUGAS 2

function calculateMultiply(a, b) {
  return a * b;
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian);


// TUGAS 3

function processSentence(name, age, address, hobby) {
  return 'Nama saya ' + name + ', umur saya ' + age + ' tahun, alamat saya di ' + address + ', dan saya punya hobby yaitu ' + hobby + '!'; 
}

var name = "Uwi";
var age = 23;
var address = "Jln. Jengki, Jakarta";
var hobby = "dancing";

var fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence); 