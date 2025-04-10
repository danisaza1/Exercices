
// Evento para el botón de inicio
document.getElementById('start-btn').addEventListener('click', function() {
    // Mostrar el contenido extra cuando se haga clic en el botón
    document.getElementById('start-btn').style.display = 'none';
    document.getElementById('explication').style.display = 'none';
    document.getElementById('jouer1').style.display = 'block';
    document.getElementById('message').innerText = `Donne moi un numero compris entre 0 et 50!`;
});

// Función jouer1 que valida el número ingresado
function jouer1() {
    let number1 = parseInt(document.getElementById('userNumber').value);
    
    // Validación del número
    if (isNaN(number1) || number1 <= 0 || number1 >= 50) {
// el || es un operador logico que se utiliza para combinar dos o mas
// condiciones logicas y devovler true si al menos una de las condiciones es verdadera, si ambas es falas, entonces devuelve false
        document.getElementById('message').innerText = `Donne moi un numero COMPRIS entre 0 et 50!`;
        return false; // Retorna false si el número no es válido
    } else {
        return number1; // Retorna el número si es válido
    }
}


// Evento para el botón checkButton (validar y continuar)
document.getElementById('checkButton').addEventListener('click', function() {
    let number1 = jouer1 (); // Llama a jouer1 para validar el número
    if (number1) { // Si el número es válido (no es false)
        // Si el número es válido, ocultar jouer1 y mostrar jouer2
            document.getElementById('jouer1').style.display = 'none';
            document.getElementById('jouer2').style.display = 'block';
            document.getElementById('message2').innerText = `Devine un numero compris entre 0 et 50!`;
        }
});


let contador = 0;  // Inicializamos el contador de intentos
// Evento para el botón checkButton2 (intentos de adivinanza)
document.getElementById('checkButton2').addEventListener('click', function() {
    let isCorrect = jouer2();  // Llamamos a jouer2 para verificar la adivinanza
    // Si la adivinanza es incorrecta, se actualiza el contador de intentos
    if (isCorrect === false) {
        contador++;  // Incrementamos el contador de intentos
        document.getElementById('checkButton2').textContent = 'Essaies : ' + contador;
    }
});



// Función jouer2 que maneja la adivinanza
function jouer2() {
    let number1 = parseInt(document.getElementById('userNumber').value);  // Número correcto (jugador 1)
    let guessANumber = parseInt(document.getElementById('userNumber2').value);  // Número ingresado por el jugador 2
    // Verificar si el número adivinado es correcto
    if (guessANumber === number1) {
        document.getElementById('message2').innerText = `Félicitations ! Vous avez trouvé le numero de joueur 1 !`;
        confetti ({ // Llamamos a la función de confetti
            particleCount: 100,  // Número de partículas (confettis) a generar
            spread: 70,          // Ángulo de dispersión de los confettis
            origin: { y: 0.6 }   // Establecer el origen vertical donde comenzarán los confettis
        });
        return true;  // El número es correcto, retornamos true 
        // Permite que la función indique un resultado: 
        // Al devolver true o false, la función le comunica
        //  al código que la llama si la adivinanza fue correcta o no.
    } else if (guessANumber < number1) {
        document.getElementById('message2').innerText = `Plus grand`;  // El número ingresado es menor
        return false;  // Adivinanza incorrecta
    } else if (guessANumber > number1) {
        document.getElementById('message2').innerText = `Plus petit`;  // El número ingresado es mayor
        return false;  // Adivinanza incorrecta
    }
}


