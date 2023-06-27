(() => {
  interface Hero {
    name: string; // Nombre del héroe
    age?: number; // Edad del héroe (opcional)
    powers: number[]; // Poderes del héroe
    getName?: () => string; // Función opcional para obtener el nombre del héroe
  }

  // Declaración de la variable flash con tipo Hero y sus propiedades
  let flash: Hero = {
    name: "Barry Allen", // Nombre del héroe: Barry Allen
    age: 24, // Edad del héroe: 24
    powers: [1, 2],
  };

  // Declaración de la variable superman con tipo Hero y sus propiedades, incluyendo una función getName()
  let superman: Hero = {
    name: "Clark Kent", // Nombre del héroe: Clark Kent
    age: 60, // Edad del héroe: 60
    powers: [1],
    getName() {
      return this.name; // Función para obtener el nombre del héroe
    },
  };
})();
