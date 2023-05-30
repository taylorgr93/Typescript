(() => {
  // Definición del tipo de dato Hero que representa las características de un héroe
  type Hero = {
    name: string; // Nombre del héroe
    age?: number; // Edad del héroe (opcional)
    powers: number[]; // Poderes del héroe
    getName?: () => string; // Función opcional para obtener el nombre del héroe
  };

  let myCustomVariable: string | number | Hero = "Fernando";
  myCustomVariable = 20;
  console.log(typeof myCustomVariable);

  myCustomVariable = {
    name: "Bruce",
    age: 43,
    powers: [1],
  };
  console.log(typeof myCustomVariable);
})();
