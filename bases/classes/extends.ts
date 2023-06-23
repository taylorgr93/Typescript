(() => {
  // Definición de la clase Avenger
  class Avenger {
    constructor(public name: string, public realName: string) {
      console.log("Constructor Avenger llamado!");
    }

    // Método protegido que devuelve el nombre completo del Avenger
    protected getFullname() {
      return `${this.name} ${this.realName}`;
    }
  }

  // Definición de la clase Xmen que extiende la clase Avenger
  class Xmen extends Avenger {
    constructor(name: string, realName: string, public isMutant: boolean) {
      // Llamada al constructor de la clase Avenger utilizando 'super'
      super(name, realName);
      console.log("Constructor xmen llamado!");
    }

    // Propiedad de acceso (getter) que devuelve el nombre completo del Xmen
    get fullName() {
      return `${this.name} - ${this.realName}`;
    }

    // Propiedad de acceso (setter) que establece el nombre del Xmen
    set fullName(name: string) {
      if (name.length < 3) {
        throw new Error("El nombre debe ser mayor de tres letras");
      }
      this.name = name;
    }

    // Método que llama al método getFullname de la clase Avenger utilizando 'super'
    getFullnameDesdeXmen() {
      console.log(super.getFullname());
    }
  }

  // Creación de una instancia de Xmen llamada wolverine
  // const wolverine = new Xmen("Wolverine", "Logan", true);
  //   console.log(wolverine);

  // Asignación de un nuevo valor a la propiedad fullName de wolverine
  // wolverine.fullName = "Fernando";
  // console.log(wolverine.fullName);
})();
