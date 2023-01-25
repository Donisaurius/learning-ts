const hero: string = "Spidey";

const myHero = (hero: string): string => {
  const value = "My hero is: " + hero;

  return value;
};

//El valor de return tiene el poder
// Si const theHero = myHero(hero); tendrá tipo string
