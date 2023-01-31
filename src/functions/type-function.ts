(() => {
  const addNumbers = (a: number, b: number): number => a + b;
  const greet = (name: string): string => `Hello ${name}`;
  const saveTheWorld = () => `El mundo está salvado`;

  // let myFuntion: Function; //Acepta cualquier funcion
  let myFuntion: (a: number, b: number) => number; //Acepta funciones que regresen numbers
  // let myFuntion: (a: string) => string; //Acepta funciones que regresen strings

  //! myFuntion = 10;//Marca error porqe espera que su valor sea una funcion

  console.log("My function"); //Type number por tomar su valor, inicialmente any

  //Ts infiere los tipos despues de la asignacion

  // myFuntion = addNumbers;
  // myFuntion = greet;
})();
