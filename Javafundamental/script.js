// Jenis data di JavaScript

// 1. String
let nama = "Azzahra putri";
console.log("Nama: " + nama);
alert("Nama: " + nama);

// 2. Number
let umur = 20;
console.log("Umur: " + umur);
alert("Umur: " + umur);

// 3. Boolean
let isMahasiswa = true;
console.log("Apakah Mahasiswa: " + isMahasiswa);
alert("Apakah Mahasiswa: " + isMahasiswa);

// 4. Array
let hobi = ["Membaca", "Melukis", "Basket"];
console.log("Hobi: " + hobi.join(", "));
alert("Hobi: " + hobi.join(", "));

// 5. Object
let orang = {
    nama: "Azzahra putri",
    umur: 25,
    hobi: ["Menulis", "Melukis"]
};
console.log("Orang: ", orang);
alert("Orang: " + orang.nama + ", Umur: " + orang.umur + ", Hobi: " + orang.hobi.join(", "));