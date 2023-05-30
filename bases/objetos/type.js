"use strict";
(() => {
    // Declaración de la variable flash con tipo Hero y sus propiedades
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: [1, 2],
    };
    // Declaración de la variable superman con tipo Hero y sus propiedades, incluyendo una función getName()
    let superman = {
        name: "Clark Kent",
        age: 60,
        powers: [1],
        getName() {
            return this.name; // Función para obtener el nombre del héroe
        },
    };
})();
