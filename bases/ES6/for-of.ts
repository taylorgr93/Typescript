(() => {
  // Definición del tipo Avenger
  type Avenger = {
    name: string;
    weapon: string;
  };

  // Objeto ironman con propiedades correspondientes al tipo Avenger
  const ironman: Avenger = {
    name: "Ironman",
    weapon: "Armorsuit",
  };

  // Objeto captainAmerica con propiedades correspondientes al tipo Avenger
  const captainAmerica: Avenger = {
    name: "Capitan America",
    weapon: "Escudo",
  };

  // Objeto thor con propiedades correspondientes al tipo Avenger
  const thor: Avenger = {
    name: "Thor",
    weapon: "Mjolnir",
  };

  // Array avengers que contiene los objetos Avenger previamente definidos
  const avengers: Avenger[] = [ironman, thor, captainAmerica];

  // Iteración sobre cada objeto Avenger en el array avengers
  for (const avenger of avengers) {
    console.log(avenger.name, avenger.weapon);
  }
})();
