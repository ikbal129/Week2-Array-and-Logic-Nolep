function tentukanDeretGeometri(arr) {
  let beda = arr[0] / arr[1];//buat variabel yang menampung beda dari angka pertama dan angka selanjutnya
  
  for (let i = 1; i < arr.length - 1; i++) {//loop array
    let nextBeda = arr[i] / arr[i + 1];//buat variabel yang menampung beda selanjutnya
    
    if (beda !== nextBeda) {//buat pembanding jika beda pertama dan selanjutnya berbeda
      return false//kembalikan nilai false jika benar
    }
  }
  //jika semua sudah di loop dan hasilnya sama
  return true//kembalikan nilai true
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false