(() => {
  const fullName = (firstName: string, lastName: string): string => {
    return `${firstName} ${lastName}`;
  };

  // const don = fullName("Adonis"); Marca error porque al tipar los argumentos lo hace requerido
})();
