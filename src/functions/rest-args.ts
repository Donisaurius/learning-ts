(() => {
  const fullName = (firstName: string, ...rest: string[]): string => {
    return `${firstName} ${rest.join(" ")}`;
  };

  console.log(
    "My nama is",
    fullName("Adonis", "Daniel", "Mendoza", "Rebolledo")
  );
})();
