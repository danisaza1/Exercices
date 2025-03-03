// const correctNumber = 22;
// const didIWin = (givenNumber) => {
//     if (givenNumber === correctNumber){
//         document.getElementById('message').innerText='Bravo ! Vous avez deviné le nombre';
//         return true;
//     }
//      else if (givenNumber < correctNumber) {
//         alert ('Plus grand');
//         return false;
//     } 
//      else if (givenNumber > correctNumber) {
//         alert ('Plus petit');
//         return false;
//     }
// }

// const gamePlay = () => {
//     const givenNumber = parseInt(prompt("Give me a number between 0 and 30."));
//     const resultat = didIWin (givenNumber);
//    // aqui lo que va a hacer gamePlay es ver 
//    // si la funcion didiwin es valida o no
//     if (resultat === false ) {
// // lo bueno de aqui es que no hicimos una 
// // boucle y que permite solamente utilzar el retourn 
// // y el codigo es mas simple
//     gamePlay ();
//    }
// }

// gamePlay();




// OU TAMBIEN SE PUEDE HACER ASI  
    


const mensaje = () => {
    return parseInt(prompt("Give me a number between 0 and 30."));
}

// Función principal del juego
function gamePlay () {
const correctNumber = 22; //almacena el numero que el jugador debe adivinar
let guessNumber = mensaje(); //pedir el primer numero 
// esta entre () porque antes la puse como una funcion.


// Verificar si el número es correcto
while (guessNumber !== correctNumber) {    // aqui lo que estoy hacinedo es 
                                         //que mientras estas condiciones no se hacen no es verdadero
    if (guessNumber < correctNumber) {
        alert("Plus grand. Essaye encore !");
    } else if (guessNumber > correctNumber) {
        alert("Plus petit. Essaye encore !");
    }
    // Si no es correcto, pedimos otro número
    guessNumber = mensaje();
}

// Aquí, después de que el jugador ha adivinado correctamente
const messageElement = document.getElementById('message');
messageElement.textContent = "Vous avez deviné le nombre !"; // Mensaje de éxito al final del juego
};

gamePlay(); // Llamamos a la función para que se ejecute






