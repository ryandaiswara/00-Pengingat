//  01. MEMBUAT ARRAY
const myArr = [1 , 2, 3, 4, 5];
console.log(myArr);

//  02a. JOIN MENAMPILKAN ARRAY
console.log(myArr.join('-'));

//  02b. FOR LOOP MENAMPILKAN ELEMENT ARRAY
for (let i = 0; i < myArr.length; i++) {
    console.log(`index ke ${i} = ${myArr[i]}`);
}

//  02c. FOREACH MENAMPILKAN ELEMENT ARRAY
myArr.forEach(function (value, index) {
    console.log(`index ke ${index} = ${value}`);
})

//  03. PUSH MENAMBAHKAN ELEMENT TERAKHIR PADA ARRAY
myArr.push('angka 6');
console.log(myArr.join(' - '));

//  04. POP MENGHAPUS ELEMENT TERAKHIR PADA ARRAY
myArr.pop();
console.log(myArr.join(' - '));

//  05. UNSHIFT MENAMBAHKABN ELEMENT PERTAMA PADA ARRAY
myArr.unshift(true);
console.log(myArr.join(' - '));

//  06. SHIFT MENGHAPUS ELEMENT PERTAMA PADA ARRAY
myArr.shift();
console.log(myArr.join(' - '));

//  07. SPLICE MENAMBAHKAN/MENGHAPUS ELEMENT TERTENTU PADA ARRAY
//  07a. SPLICE MENAMBAHKAN
myArr.splice(3, 0, true);
console.log(myArr.join(' - '));
//  07b. SPLICE MENGHAPUS
myArr.splice(3, 1);
console.log(myArr.join(' - '));

//  08. SLICE MENGIRIS ELEMENT ARRAY DAN MENJADIKANNYA ARRAY BARU
const myArr2 = myArr.slice(0, 4);
console.log(myArr2.join(' - '));

//  09. SPREAD MENGGABUNGKAN 2 ARRAY MENJADI ARRAY BARU
const myArr3 = [true, false, 'ini array'];
const myArr4 = [...myArr3, ...myArr2];
console.log(myArr4.join(' - '));

//  10. MAP MEMETAKAN ELEMENT PADA ARRAY DAN MERETURN
const myArr5 = myArr.map(function(e) {
    return e*2;
})
console.log(myArr5.join(' - '));

//  11. FILTER MENYARING ELEMENT PADA ARRAY DAN MERETURN
const myArr6 = myArr5.filter(function(e) {
    return e > 5 && e < 10;
})
console.log(myArr6.join(' - '));

//  12. FIND MENCARI ELEMENT YANG PERTAMA KALI DITEMUKAN DAN MERETURN MENADI SEBUAH TYPE DATA PADA VARIABEL
const myArr7 = myArr5.find(function(e) {
    return e > 5;
})
console.log(myArr7);