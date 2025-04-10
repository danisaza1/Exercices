const joueur1 = document.getElementById('jugador1');
const joueur2 = document.getElementById('jugador2');
const emoji1 = document.getElementById('emoji1'); // Selección del emoji para jugador 1
const emoji2 = document.getElementById('emoji2'); // Selección del emoji para jugador 2
const button1 = document.getElementById("buton1");
const button2 = document.getElementById("buton2");
const phrase = document.getElementById("phrase");
const emojiMostrar1 = document.getElementById("emojiM1");
const emojiMostrar2 = document.getElementById("emojiM2");


let numeroEmoji = 50;
let turn = 1; // empieza el turno del jugador 1
let emojiJoueur1;
let emojiJoueur2;


function actualizarEmojis1() {
    // Capturar los emojis seleccionados por los jugadores
    emojiJoueur1 = emoji1.value;

    // Crear una cadena con 25 caracteres de cada emoji
    const emojiRepeat1 = emojiJoueur1.repeat(25);  // Repite el emoji 25 veces

    // Crear los elementos de emoji para el jugador 1 y el jugador 2
    const emojiElement1 = document.createElement('span');
    emojiElement1.textContent = emojiRepeat1;  // Asignamos la cadena repetida de emojis

    // Limpiar el contenedor de emojis antes de añadir nuevos emojis
    emojiMostrar1.innerHTML = ''; 

    // Añadir los emojis al contenedor
    emojiMostrar1.appendChild(emojiElement1);

    // Asegurarse de que los emojis se muestren en línea
    emojiMostrar1.style.display = 'block';
}

// Evento para el emoji del jugador 1
emoji1.addEventListener("change", () => {
    actualizarEmojis1(); // Llamar a la función para actualizar los emojis
});


function actualizarEmoji2 () {
    emojiJoueur2 = emoji2.value;
    const emojiRepeat2 = emojiJoueur2.repeat(25);  // Repite el emoji 25 veces
    const emojiElement2 = document.createElement('span');
    emojiElement2.textContent = emojiRepeat2;  // Asignamos la cadena repetida de emojis
    emojiMostrar2.innerHTML = ''; 
    emojiMostrar2.appendChild(emojiElement2);
     // Asegurarse de que los emojis se muestren en línea
     emojiMostrar2.style.display = 'inline-block';    
}

// Evento para el emoji del jugador 2
emoji2.addEventListener("change", () => {
    actualizarEmoji2(); // Llamar a la función para actualizar los emojis
});



button1.addEventListener("click", () => {
    let jugador1 = joueur1.value;     
 // Comprobación de la validez del número ingresado
 if (isNaN(jugador1) || jugador1 <= 0 || jugador1 > 6) {
    phrase.style.display = "block";
    phrase.innerHTML = "Veuillez entrer un nombre valide entre 1 et 6.";
} else {
    // Si el número es válido, proceder con la lógica de retirar emojis
    utilisateurEnlever(jugador1);
}})


button2.addEventListener("click", () => {
    let jugador2 = joueur2.value;
 // Comprobación de la validez del número ingresado
 if (isNaN(jugador2) || jugador2 <= 0 || jugador2 > 7) {
    phrase.style.display = "block";
    phrase.innerHTML = "Veuillez entrer un nombre valide entre 1 et 6.";
} else {
    // Si el número es válido, proceder con la lógica de retirar emojis
    utilisateurEnlever(jugador2);
}
})

function utilisateurEnlever(numeroRetirar) {
    // Determinamos el turno y actualizamos el número de emojis a retirar
    if (numeroRetirar > numeroEmoji) {
        phrase.style.display = 'block'; // Hacemos visible el div de los mensajes
        phrase.innerHTML = `Il n'y a pas assez d'emojis. Il en reste ${numeroEmoji}.`;
    } else {
        retirerEmojis(numeroRetirar);
        if (numeroEmoji <= 0) {
            phrase.style.display = 'block';
            phrase.innerHTML = `Le joueur ${turn % 2 === 1 ? '1' : '2'} a gagné!`;
            return;
        } else {
            turn++; // Cambiar el turno
            phrase.style.display = 'block';
            phrase.innerHTML = `Il y a ${numeroEmoji} emojis. Combien des emojis voulez-vous retirer ?`;
        }
    }
}

// Función para retirar emojis
function retirerEmojis(numero) {
    if (numero >= 1 && numero <= 6) {
        numeroEmoji -= numero;
    }
}

