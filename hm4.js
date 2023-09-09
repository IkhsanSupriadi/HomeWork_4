// Fungsi untuk menghasilkan nilai acak antara 1 dan 50
function AngkaRandom() {
  return Math.floor(Math.random() * 50) + 1;
}

// array untuk menyimpan 100 angka acak
const randomArray = [];

// untuk mengisi array dengan nilai acak
for (let i = 0; i < 100; i++) {
  const randomValue = AngkaRandom();
  randomArray.push(randomValue);
}

// array untuk angka-angka genap dan ganjil
const ArrayGenap = [];
const ArrayGanjil = [];

// Memisahkan angka-angka menjadi array genap dan ganjil
for (let i = 0; i < randomArray.length; i++) {
  if (randomArray[i] % 2 === 0) {
    ArrayGenap.push(randomArray[i]); // Menambahkan angka genap ke array genap
  } else {
    ArrayGanjil.push(randomArray[i]); // Menambahkan angka ganjil ke array ganjil
  }
}

// Menghitung nilai Minimal, Maximal, Total, Rata-rata untuk array genap
let NilaiMin = ArrayGenap[0];
let NilaiMax = ArrayGenap[0];
let evenTotal = 0;

for (let i = 0; i < ArrayGenap.length; i++) {
  const currentValue = ArrayGenap[i];

  if (currentValue < NilaiMin) {
    NilaiMin = currentValue;
  }

  if (currentValue > NilaiMax) {
    NilaiMax = currentValue;
  }

  evenTotal += currentValue;
}

const evenAverage = evenTotal / ArrayGenap.length;

// Menghitung nilai Minimal, Maximal, Total, Rata-rata untuk array ganjil
let oddMin = ArrayGanjil[0];
let oddMax = ArrayGanjil[0];
let oddTotal = 0;

for (let i = 0; i < ArrayGanjil.length; i++) {
  const currentValue = ArrayGanjil[i];

  if (currentValue < oddMin) {
    oddMin = currentValue;
  }

  if (currentValue > oddMax) {
    oddMax = currentValue;
  }

  oddTotal += currentValue;
}

const oddAverage = oddTotal / ArrayGanjil.length;

// Menampilkan hasil
console.log('100 angka acak antara 1 dan 50:', randomArray);
console.log('Array genap:', ArrayGenap);
console.log('Array ganjil:', ArrayGanjil);
console.log('Statistik untuk array genap:');
console.log('  Minimal:', NilaiMin);
console.log('  Maksimal:', NilaiMax);
console.log('  Total:', evenTotal);
console.log('  Rata-rata:', evenAverage);

console.log('Statistik untuk array ganjil:');
console.log('  Minimal:', oddMin);
console.log('  Maksimal:', oddMax);
console.log('  Total:', oddTotal);
console.log('  Rata-rata:', oddAverage);


// ... membandingkan Nilai pada Kedua Array

// Membandingkan nilai maksimum
if (NilaiMax > oddMax) {
  console.log('Nilai Maksimum lebih besar pada array genap');
} else if (NilaiMax < oddMax) {
  console.log('Nilai Maksimum lebih besar pada array ganjil');
} else {
  console.log('Nilai Maksimum memiliki nilai yang sama antara array genap dan ganjil');
}

// Membandingkan nilai minimum
if (NilaiMin > oddMin) {
  console.log('Nilai Minimum lebih besar pada array genap');
} else if (NilaiMin < oddMin) {
  console.log('Nilai Minimum lebih besar pada array ganjil');
} else {
  console.log('Nilai Minimum memiliki nilai yang sama antara array genap dan ganjil');
}

// Membandingkan total
if (evenTotal > oddTotal) {
  console.log('Total Nilai lebih besar pada array genap');
} else if (evenTotal < oddTotal) {
  console.log('Total Nilai lebih besar pada array ganjil');
} else {
  console.log('Total Nilai memiliki nilai yang sama antara array genap dan ganjil');
}

// Membandingkan rata-rata
if (evenAverage > oddAverage) {
  console.log('Rata-rata Nilai lebih besar pada array genap');
} else if (evenAverage < oddAverage) {
  console.log('Rata-rata Nilai lebih besar pada array ganjil');
} else {
  console.log('Rata-rata Nilai memiliki nilai yang sama antara array genap dan ganjil');
}

