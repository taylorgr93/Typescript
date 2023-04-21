"use strict";
(() => {
    // Definimos un arreglo de números con valores del 1 al 10.
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // Agregamos el número 11 al final del arreglo.
    numbers.push(11);
    // Imprimimos el arreglo de números en la consola.
    console.log(numbers);
    // Definimos un arreglo de villanos como cadenas de texto.
    const villians = ["Omega Rojo", "Dormammu", "Duende Verder"];
    // Iteramos sobre cada elemento del arreglo e imprimimos su versión en mayúsculas.
    villians.forEach((v) => console.log(v.toUpperCase()));
})();
