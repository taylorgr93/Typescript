(() => {
  // Definición del tipo Avengers
  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
  };

  // Objeto avengers con propiedades correspondientes al tipo Avengers
  const avengers: Avengers = {
    nick: "Samuel L. Jackson",
    ironman: "Robert Downey Jr.",
    vision: "Paul Bettany",
    activo: true,
    poder: 1500.123456,
  };

  // Desestructuración del objeto avengers para obtener las propiedades 'poder' y 'vision'
  // const { poder, vision } = avengers;
  // console.log(poder.toFixed(2), vision.toUpperCase());

  // Función printAvenger que acepta un objeto del tipo Avengers
  // y muestra en consola el valor de la propiedad 'ironman' y las demás propiedades en el objeto 'resto'
  const printAvenger = ({ ironman, ...resto }: Avengers) => {
    // console.log(ironman, resto);
  };

  // Llamada a la función printAvenger pasando el objeto avengers como argumento
  printAvenger(avengers);

  const avengersArr: string[] = ["Cap America", "Ironman", "Hulk"];
  const [, ironman] = avengersArr;
  // console.log(ironman);
})();
