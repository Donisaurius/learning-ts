let mensaje: string = "Hola mundo";

/* TIPOS EN TS:

*any => no usarlo
*unknown
*never
*arrays
*tuplas
*Enums

Tipos inferidos: 
- Esto asigna el tipo del valor de la inicializacion del valor
*/

let extincionDinosaurious: number = 76_000_000;
let dinosaurioFavorito: string = "T-rex";
let extintos = true; //Boolean inferido

function chanchitoFelij(config: any) {
  //Tipo any: no usar

  // Si tenemos un proyecto y queremos migrarlo a ts, inicialmente podemos tipar a any los argumentos de las funciones para luego ir cambiandolos
  return config;
}

/* TIPAR ARRAYS */

let animales: string[] = ["PERRO", "GATO", "Ave"];
let numbers: number[] = [1, 2, 3];
// let checks: boolean[] = [true, false]
let checks: Array<boolean> = [true, false];

/* TUPLAS: tipo de dato array que tiene una longitud definida y orden */

let tuplas: [number, string] = [1, "Chanchin"]; //Si asignamos un valor más marcará error.
//*Actualemente se le puede hacer un push, que es un error. O j o

/* ENUMS */

enum Sizes {
  Small = "sm",
  Medium = "md",
  Large = "lg",
  ExtraLarge = "xl",
} //Esto genera un aumento de 1 a 1 en estas variables
//Actualmente complejo ver un caso de uso. O jo

/* Objetos  */

/* TYPES */

type DirectionType = {
  street: string;
  number: number;
};

type UserType = {
  readonly id: number;
  name: string;
  age?: number; //Propiedad opcional
  size: Sizes;
  direction: DirectionType; //Componer tipos
};

const user: UserType = {
  id: 1,
  name: "Donie",
  size: Sizes.Small,
  direction: {
    street: "A",
    number: 2,
  },
};

// user.id = 2; id es una propiedad de lectura, no se puede sobreescribir
