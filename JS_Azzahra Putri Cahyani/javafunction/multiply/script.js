// Latihan 1: Fungsi untuk mencetak "<3"
function printHeart() {
    console.log("<3");
}

// Menjalankan fungsi
printHeart();


// Latihan 2: Fungsi untuk mengalikan dua angka
function multiply(a, b) {
    return a * b;
}

// Contoh penggunaan
console.log(multiply(2, 3)); // 6
console.log(multiply(9, 9)); // 81
console.log(multiply(5, 4)); // 20

// Latihan 3A: Lingkup variabel
let animal = "Gurita Pasifik Raksasa";

function observe() {
    let animal = "Piyama Cumi-cumi";
    console.log(animal);
}

observe(); // Ini akan mencetak "Piyama Cumi-cumi"

// Latihan 3B: Lingkup variabel
let deadlyAnimal = "Gurita Cincin Biru";

function handleAnimal() {
    let deadlyAnimal = "Ikan Kalajengking";
    console.log(deadlyAnimal);
}

handleAnimal(); // Ini akan mencetak "Ikan Kalajengking"
console.log(deadlyAnimal); // Ini akan mencetak "Gurita Cincin Biru"

// Latihan 4: Fungsi panah untuk menyapa
const sayHello = (name) => {
    return `Hello, ${name}!`;
};

// Contoh penggunaan
console.log(sayHello("Hagrid")); // "Hello, Hangrid!"
console.log(sayHello("Luna"));   // "Hello, Luna!"
