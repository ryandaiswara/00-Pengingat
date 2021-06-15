console.log(`=== OBJECT LITERAL ===`);
//  01a. MEMBUAT OBJECT SECARA LITERAL
const mahasiswa = {
    nama: 'Ryanda iswara',
    age: 28,
    'tanggal lahir': '15 Agustus 1992'
}
//  01b. MEMANGGIL OBJECT
console.log(mahasiswa.nama);
//  01c. MEMANGGIL OBJECT YANG KEY-NYA LEBIH DARI SATU KATA
console.log(mahasiswa['tanggal lahir']);




console.log(`\n=== PENAMBAHAN PROPERTI ===`);
//  02. Properti object dapat langsung ditambahkan melalui argument/statement
const tambahKey = {
    prop1: 'ini adalah prop 1'
}

tambahKey.prop2 = 'ini adalah prop 2'; // Menambahkan properti melalui argument/statement

console.log(tambahKey);




console.log(`\n=== MENGGABUNGKAN OBJECT ===`);
//  03. Menggabungkan 2 object menjadi object baru dengan ...
const objek1 = {
    nama1: `objek 1`
}

const objek2 = {
    nama2: `objek 2`
}

const objek3 = {...objek1, ...objek2,
    nama3: `objek 3`
}

console.log(objek3);




console.log(`\n=== OBJECT FUNCTION DECALARATION ===`);
//  05a. MEMBUAT OBJECT DENGAN FUNCTION DECLARATION
function objKaryawan (nama, umur, posisi) {
    const karyawan = {};
    karyawan.nama = nama;
    karyawan.umur = umur;
    karyawan.posisi = posisi;

    return karyawan; // mengembalikan nilai object karyawan
}
//  05b. Instansiasi OBJECT DAN MENGISI PROPERTI DARI OBJECT DENGAN PARAMETER FUNCTION
const karyawan01 = objKaryawan('ryanda iswara', 28, 'GM');
console.log(karyawan01);




console.log(`\n=== OBJECT CONSTRUCTOR ===`);
//  06a. CONSTRUCTOR ADALAH FUNCTION YANG "KHUSUS" UNTUK MEMBUAT OBJECT
/*
    - Konvensi penulisan nama constructor diawali dengan huruf kapital
    - Selalu gunakan constructor untuk membuat object
    - Constructor tidak membuat object terlebih dahulu seperti membuat object dengan function declaration
    - Menggunakan keyword this dan tidak menggunakan return
    - Instansiasi object pada constructor menggunakan keyword -> new
*/
function karyawan(nama, umur, posisi) {
    this.nama = nama;
    this.umur = umur;
    this.posisi = posisi;
}
//  06b. Instansiasi object dengan menggunakan keyword new
let karyawan02 = new karyawan('Pandu', 22, 'CS');
console.log(karyawan02);




console.log(`\n=== THIS PADA OBJECT FUNCTION DECLARATION ===`);
//  07a. This pada object function declaration
function x () {
    console.log(this);
}
//  This pada function declaration mengacu pada scope global
x()

console.log(`\n=== THIS PADA OBJECT LITERAL ===`);
//  o7.b This pada object literal
const xx = {
    name: 'ini adalah object xx',
    cekThis: function() {
        console.log(this);
    }
}
// This pada object literal mengacu pada object yang bersangkutan
xx.cekThis();

console.log(`\n=== THIS PADA CONSTRUCTOR ===`);
function X (kalimat) {
    console.log(this);
    this.kalimat = kalimat;
}
/* 
    - Keyword new membuat object baru bernama X
    - Setelah object di instansiasi, maka object X mengacu pada instan tersebut

*/
const instansiasi01 = new X('ini adalah constructor X');
console.log(instansiasi01);