

function isValidDate(confirmarDate) {
    // Vérifie si le format est correct (dd/mm/yyyy)
    const dia = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    // un backslash \ indique que le caractere qui suit doit etre interprete litteralment
    //et pas comme un caractere special
    //$ correspond a la fin de la séquence
    //^ correspond au debut de la séquence
    // \d correspond à un chiffre 
    // voir le lien suivant pour tous les caracteres special
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Regular_expressions
    const match = confirmarDate.match(dia);
    //match es un metodo corresponde si hay similitudes en una expresion de string
    
    if (!match) {
    // ! es un operador logico que significa non ou negacion. entonces 
    // hace que match sea negativo.
      return false; // Si la chaîne ne correspond pas au format, on retourne false
    }
  
    // Extraire le jour, le mois et l'année
    const day = parseInt(match[1], 10); // 10 porque contamos del 0 al 10.
    const month = parseInt(match[2], 10) - 1; // los meses empiezan desde cero, entonces hay 11 meses
                                            // y le restamos uno, para que JS entienda que se empieza desde 0 y no de 1
    const year = parseInt(match[3], 10);
    //aqui lo ponemos match [1] que equivale al dia, y asi sucesivamente
    // importante = el cero aqui es la correspondace complète, aqui se cuentan 
    // es por grupos capturados entre parenthesis.
  
    // Créer un objet Date
    // new est un constructeur qui permet de créer un objet, ici Date
    const date = new Date(year, month, day);
  
    // Vérifier si la date créée correspond bien à la date initiale
    // hay que saber que los get aqui son metodos nativos de JS, entonces el sabra que debe de capturar
    return date.getDate() === day && date.getMonth() === month && date.getFullYear() === year;
  }
  
  // Exemple d'utilisation :
  console.log(isValidDate('11/03/2025')); // true
  console.log(isValidDate('31/02/2025')); // false (le 31 février n'existe pas)
  console.log(isValidDate('29/02/2024')); // true (2024 est une année bissextile)
  console.log(isValidDate('00/12/2025')); // false (jour qui n'est pas encore arrivée)
  console.log(isValidDate("03/14/2001")); // false (14 n'est pas un mois valide)
  console.log(isValidDate("03/04/2001")); // true
  console.log(isValidDate("31/11/2001")); // false (novembre contient que 30 jours)
  





  console.log("\n"); // Salto de línea


  
  
  function isPalindrome (confirmarDate) {
    const dia = /^(\d{2})\/(\d{2})\/(\d{4})$/;
   // Verificamos si la fecha coincide con el formato
  const corresponde = confirmarDate.match(dia);

  if (!corresponde) {
    // Si no coincide con el formato, devolvemos false
    return 'Formato de fecha incorrecto';
  }

  // Concatenamos el día, mes y año para verificar si la fecha es un palíndromo
  const fechaConcatenada = corresponde[1] + corresponde[2] + corresponde[3];
  // convertidos el dia en un tableau para poderlo hacer lo siguiente en fechaReversa
  const fechaReversa = fechaConcatenada.split('').reverse().join('');
  // split divide una string en un tableau.lo utilizamos para poder ver si es un palindrome
  // reverse voltea el tableau 
  // join junta todos los elementos

  if (fechaConcatenada === fechaReversa) {
    return 'Palindrome'; // Si es palíndromo
  } else {
    return 'Non palindrome'
  }
  }


  console.log(isPalindrome("11/02/2011")); // true
  console.log(isPalindrome("03/04/2001")); // false
  console.log(isPalindrome("22/02/2022")); // true
  console.log(isPalindrome("12/02/2021")); // true