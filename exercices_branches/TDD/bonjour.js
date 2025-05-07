const sayHello = (name) => {
    const nom = (name === null || name === undefined) ? 'inconnu' : name;
    return `Bonjour, ${nom} !`;
  };
  
  const esTuMajeur = (age) => {
    return age > 18;
  };
  
  export { sayHello, esTuMajeur };
  