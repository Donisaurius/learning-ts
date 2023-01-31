(() => {
  //* Crear tipos especificos

  type HeroType = {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  };

  let flash: HeroType = {
    name: "Barry",
    age: 24,
    powers: ["High speed", "Travel through time"],
    getName: function () {
      return this.name || "No name";
    },
  };

  // flash = {
  //   name2: "Other name",
  // };Esto marca error porque Ts crea un tipo al definir el objeto

  // flash = {
  //   name: "Adonis",
  //   age: 23,
  //   powers: ["dev"],
  //   // getNombre() {
  //   //   return this.name;Aceptaria agregar una funcion, pero esto puede arruinar el comportmiento inicial
  //   // }
  // }; //Se pueden sobreescribir los valores, pero hay que colocar todas las props
})();
