function pasanganTerbesar(num) {
  //buat variabel penampung num untuk dirubah jadi String
  let strNum = num.toString()
  let angkaSebelum = 0;
  
  //looping string untuk mendapatkan angka 1 per satu
  for (let i = 0; i < strNum.length; i++) {
    let pasangan = parseInt(strNum[i] + strNum[i + 1])
    //cek apakah pasangan terbaru lebih besar dari angka sebelumnya
    if (pasangan > angkaSebelum) {
      angkaSebelum = pasangan
    }
  }
  return angkaSebelum
}

console.log(pasanganTerbesar(123456))
// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99