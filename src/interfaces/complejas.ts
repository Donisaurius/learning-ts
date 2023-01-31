(() => {
  //La interfaz principal va de priemra

  interface Client {
    name: string;
    age: number;
    address: Address;
    getFullAddress(id: string): void; //Esto solo define que tiene un metodo que recibe x y devuelve m
  }

  interface Address {
    zip: string;
    street: number;
  }

  const client: Client = {
    name: "Adonis",
    age: 23,
    address: {
      street: 1,
      zip: "A",
    },
    getFullAddress(id: string) {
      console.log(this.address.street);
    },
  };
})();
