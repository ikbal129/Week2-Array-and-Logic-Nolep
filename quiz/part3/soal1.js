//mencari mean dari sebuah arrray
//rumus mean = jumlah data / banyak data
function cariMean(arr) {
  //looping dulu
  let jumlah = 0
  for (let i = 0; i < arr.length; i++) {
    jumlah += arr[i]
  }
  
  let hasil = jumlah / arr.length
  return Math.round(hasil)
}

console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7