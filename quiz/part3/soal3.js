function tentukanDeretAritmatika(arr) {
  let selisih = arr[1] - arr[0];//buat selisih pertama
  
  for (let i = 1; i < arr.length - 1; i++) {//loop arr untuk membandingkan tiap tiap angka
    let currentSelisih = arr[i + 1] - arr[i];//buat variabel selisih selajutnya yang bukan dengan selisih pertama
    if (currentSelisih !== selisih) {//bandingkan selisih pertama dan kedua
      return false//jika benar maka kembalikan nilai false
    }
  }
  //jika semua sudah di loop maka
  return true//kembalikan nilai true
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false