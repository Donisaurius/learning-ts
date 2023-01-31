(() => {
  /* 1 */
  interface Auto {
    encender: boolean;
    velocidad: number;
    acelerar: () => void;
  }

  const batimovil: Auto = {
    encender: false,
    velocidad: 0,
    acelerar() {
      console.log("FIIIUMMMMMM");
    },
  };

  /* 2 */

  interface Villano {
    reir?: boolean;
    comer?: boolean;
    liberar?: boolean;
  }

  const guason: Villano = {
    reir: true,
    comer: true,
    liberar: false,
  };

  /* 3 */

  interface CityCitizens {
    (ciudadanos: string[]): number;
  }

  const ciudadGotica: CityCitizens = (ciudadanos: string[]): number => {
    return ciudadanos.length;
  };
})();
