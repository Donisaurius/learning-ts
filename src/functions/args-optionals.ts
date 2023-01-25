(() => {
  const fullName = (firstName: string, lastName?: string): string => {
    //Si no se envia el lastname podemos usar el or ||
    return `${firstName} ${lastName || "No lastname"}`;
  };
})();
