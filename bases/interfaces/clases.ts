(() => {
  // Definición de la interfaz "Xmen"
  interface Xmen {
    name: string;
    realName: string;
    mutantPower(id: number): string;
  }

  // Definición de la interfaz "Human"
  interface Human {
    age: number;
  }

  // Clase "Mutant" que implementa las interfaces "Xmen" y "Human"
  class Mutant implements Xmen, Human {
    public name: string = ""; // Propiedad "name" de tipo string
    public realName: string = ""; // Propiedad "realName" de tipo string
    public age: number = 0; // Propiedad "age" de tipo number

    // Método "mutantPower" implementado de la interfaz "Xmen"
    mutantPower(id: number): string {
      return this.name + " " + this.realName;
    }
  }
})();
