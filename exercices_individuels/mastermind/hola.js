// Función para validar los colores
function onlyFourColors(propose) {
  const allowedColors = ['blue', 'red', 'yellow', 'green', 'purple', 'orange', 'black', 'white'];

  if (propose.length < 4) {
    console.log(`Please choose 4 colors from this list: ${allowedColors.join(', ')}`);
    return false;
  }

  for (let color of propose) {
    if (!allowedColors.includes(color)) {
      console.log('Choose a valid color');
      return false;
    }
  }

  console.log('Colors accepted');
  return true; // ✅ Feedback para saber si todo fue bien
}

// Función para que el jugador 1 introduzca el código secreto
function codemaker() {
  while (true) {
    const secret = prompt("Codemaker: Enter the secret code (4 colors separated by commas):");
    const secret_color = secret.split(',').map(c => c.trim());
    if (onlyFourColors(secret_color)) {
      console.log("Secret code accepted!");
      return secret_color;
    } else {
      console.log("Invalid secret code, try again.");
    }
  }
}

// Función para comprobar si la combinación es correcta (misma posición y color)
function goodCombination(propose, secret_color) {
  return JSON.stringify(propose) === JSON.stringify(secret_color);
}

// Función principal para jugar
function playGame(secret_color) {
  let tries = 0;
  const maxTries = 12;

  while (tries < maxTries) {
    const message = prompt("Write four colors separated by commas:");
    const propose = message.split(',').map(c => c.trim());

    if (!onlyFourColors(propose)) {
      console.log("You have to select valid colors.");
      continue;
    }

    if (goodCombination(propose, secret_color)) {
      console.log("You guessed the colors!");
      return;
    } else {
      console.log("You have to continue.");
      tries += 1;
    }
  }

  console.log(`You lost! The secret code was: ${secret_color.join(', ')}`);
}

// 🚀 Ejecución del juego
const secret_code = codemaker(); // Jugador 1 introduce el código secreto
playGame(secret_code);           // Jugador 2 intenta adivinarlo
