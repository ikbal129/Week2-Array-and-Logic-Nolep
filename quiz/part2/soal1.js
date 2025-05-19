function palindrome(kata) {
  let balik = "";//buat variabel untuk menampung setiap kata yang dibalik
  for (let i = kata.length - 1; i >= 0; i--) {//looping kata tersebut dari indeks paling terakhir
    balik += kata[i];//susun kata setiap indeks ke variabel balik
  }
  if (balik == kata) {//jika variabel balik sama dengan kata kembalikan nilai true
    return true;
  }
  else {
    return false;//jika bukan maka kembalikan nilai false
  }
}

console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false