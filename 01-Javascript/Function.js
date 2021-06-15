//  01. Funtion declaration
function panggilNama () {
    console.log('ryanda iswara');
}

//  02. Memanggil function
panggilNama();

//  03. Function expression
const panggilNama2 = function () {
    console.log(`Nama saya adalah ryanda iswara`);
}
panggilNama2();

//  04. Funtion dengan parameter
const panggilNama3 = function (nama) {
    console.log(`Nama saya adalah ${nama}`);
}
panggilNama3('ryanda iswara');

//  05. Function dengan default parameter
const panggilNama4 = function(nama, umur = 28) {
    console.log(`Nama saya adalah ${nama} dan umur saya adalah ${umur} tahun`);
}
panggilNama4('ryanda iswara');

//  06. Functin dengan return
const funcReturn = function (a, b) {
    return a * b;
}
let hasilPerkalian = funcReturn(2, 3);
console.log(hasilPerkalian);

//  07a. Arrow Function tanpa parameter / implicit return
const arrFunc = () => console.log(`Ini adalah arrow function tanpa parameter`);
arrFunc();

//  07b. Arrow funtion dengan satu parameter / implicit return
const arrFunc2 = nama => console.log(`nama saya adalah ${nama}`);
arrFunc2('ryanda iswara');

//  07c. Arrow function dengan lebih dari satu parameter
const arrFunc3 = (a, b) => {
    return a * b;
}
let hasilPerkalian2 = arrFunc3(2, 2);
console.log(hasilPerkalian2);

//  08. Funtion Recurtion / memanggil dirinya sendiri
const funcRecur = function (n) {
    // Buat base case dimana function akan berhenti loop
    if (n === 0) {
        return;
    }

    console.log(`ini adalah perulangan ke ${n}`);
    return funcRecur(n-1); // memanggil dirinya sendiri
}
funcRecur(5);

//  09a. Function dengan rest parameter
//  Menyimpan arguments kedalam array
const funcRestParam = (...numbers) => {
    let total = 0;

    for (let number of numbers) {
        total +=number;
    }

    return total;
}
let hasilRestParam = funcRestParam(1, 2, 3, 4, 5);
console.log(hasilRestParam);

//  09b. Function dengan arguments
const funcArgum = function () {
    let hasil = 0;

    for (let i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }

    return hasil;
}

let hasilFuncArgum = funcArgum(1, 2, 3, 4, 5);
console.log(hasilFuncArgum);