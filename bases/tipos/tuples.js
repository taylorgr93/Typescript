"use strict";
(() => {
    // Se define la tupla 'hero' con una cadena de texto, un número y un booleano
    const hero = ["Dr Strange", 100, true];
    // Se modifica el segundo elemento de la tupla a un valor de 50
    hero[1] = 50;
    // Se modifica el primer elemento de la tupla a "Ironman"
    hero[0] = "Ironman";
    // Se modifica el tercer elemento de la tupla a 'false'
    hero[2] = false;
    // Se imprime la tupla en la consola
    console.log(hero);
})();
