(() => {
  class Avenger {
    // private name: string; //Esta es la forma larga de def props
    // public team: string; //Esta es la forma larga de def props
    // public realName: string; //Esta es la forma larga de def props
    static avgAge: number = 35;

    constructor(
      private name: string, //Esta es la forma corta
      private team: string, //Esta es la forma corta
      private realName: string //Esta es la forma corta
    ) {
      // this.name = name; //Forma larga de las props
      // this.team = team; //Forma larga de las props
      // this.realName = realName; //Forma larga de las props
    }

    // private bio() {
    //   //Error en escritura, pero igual lo compila porque JS no tiene metodos privados
    //   return `${this.name} (${this.team})`;
    // }
    public bio() {
      //Error en escritura, pero igual lo compila porque JS no tiene metodos privados
      return `${this.name} (${this.team})`;
    }
  }

  const antman: Avenger = new Avenger("Antman", "Avengers", "Scott Lang");
  console.log("Antman", antman.bio());
})();
