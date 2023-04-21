"use strict";
(() => {
    let avenger = 123; // variable avenger de tipo any con valor inicial 123
    let exists; // variable exists sin valor inicial
    let power; // variable power sin valor inicial
    avenger = "Dr Strange"; // variable avenger ahora es un string "Dr Strange"
    // console.log(avenger.charAt(0)); // error: no se puede llamar a charAt en un tipo any
    console.log(avenger.charAt(0)); // se convierte avenger a string y se llama a charAt en la primera letra (D)
    avenger = 150.23256415; // variable avenger ahora es un número 150.23256415
    // console.log(avenger.toFixed(2)); // error: no se puede llamar a toFixed en un tipo any
    console.log(avenger.toFixed(2)); // se convierte avenger a número y se llama a toFixed con 2 decimales (150.23)
    console.log(exists); // imprime undefined porque exists no tiene un valor asignado
    console.log(power); // imprime undefined porque power no tiene un valor asignado
})();
