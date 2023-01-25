(() => {
  const fullName = (
    firstName: string,
    lastName?: string,
    age: number = 23
  ): string => {
    //Los argumentos requeridos no deben seguir de argumentos opcionales

    return `${firstName} ${lastName} - ${age > 18 ? "Older" : "Junior"}`;
  };

  console.log(fullName("Adonis", "Mendoza"));
})();
