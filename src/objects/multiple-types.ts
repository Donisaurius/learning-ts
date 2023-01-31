(() => {
  type HeroType = {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  };

  let myCustomVariable: HeroType | string = "Adonis";
})();
