(() => {
  // Definición de la interfaz "Client"
  interface Client {
    name: string;
    age?: number; // Propiedad opcional
    address: Address;
    getFullAddress(id: string): string; // Método que devuelve una cadena
  }

  // Definición de la interfaz "Address"
  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  // Objeto "client" que cumple con la interfaz "Client"
  const client: Client = {
    name: "Fernando",
    age: 25,
    address: {
      id: 125,
      zip: "KY2 SUD",
      city: "Ottawa",
    },
    getFullAddress(id: string) {
      return this.address.city;
    },
  };

  // Objeto "client2" que cumple con la interfaz "Client"
  const client2: Client = {
    name: "Melissa",
    age: 30,
    address: {
      city: "Toronto",
      id: 120,
      zip: "K2S U2A",
    },
    getFullAddress(id: string) {
      return this.address.city;
    },
  };
})();
