//Objetos

type Car = {
  carroceria: string;
  modelo: string;
  antibala: boolean;
  pasajeros: number;
};

const batimovil: Car = {
  carroceria: "Negra",
  modelo: "6x6",
  antibala: true,
  pasajeros: 4,
};

//Villano: ObjetoPersonalizado[]

type Villian = {
  name: string;
  edad: number;
  mutante: boolean;
};

const villanos: Villian[] = [
  {
    name: "Lex luthor",
    edad: 54,
    mutante: false,
  },
  {
    name: "Erik magnus",
    edad: 40,
    mutante: true,
  },
];

//Multiples tipos

type Charles = {
  poder: string;
  estatura: number;
};

type Apocalipsis = {
  lider: boolean;
  miembros: string[];
};

const charles: Charles = {
  poder: "Psiquico",
  estatura: 1.78,
};

const apocalipsis: Apocalipsis = {
  lider: true,
  miembros: ["Magneto", "Tormenta"],
};

//Mystique debe ser cualquier tipo de dos mutantes (charles o apocalipsis)

let mystique: Charles | Apocalipsis;

mystique = charles;
mystique = apocalipsis;
