"use strict";
(() => {
    var _a;
    // Definición de una variable 'flash' de tipo objeto con propiedades 'name', 'age' y 'powers'
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "Viajar en el tiempo"],
    };
    // Actualización de la variable 'flash' con nuevos valores
    flash = {
        name: "Clark Kent",
        // age: 60,    // Comentario: La propiedad 'age' se encuentra comentada y no se está actualizando
        powers: ["Super fuerza"],
        getName() {
            // Comentario: El método 'getNombre()' se encuentra comentado y no se está agregando
            return this.name;
        },
    };
    // Impresión en la consola del objeto 'flash' actualizado
    console.log((_a = flash.getName) === null || _a === void 0 ? void 0 : _a.call(flash));
})();
