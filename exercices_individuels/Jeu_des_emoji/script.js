const joueur1 = document.getElementById('jugador1');
const joueur2 = document.getElementById('jugador2');
const button = document.getElementById("buton");
const phrase = document.getElementById("phrase");



let numeroEmoji = 50;
let resto;


function utilisateurEnlever() {
    let numeroEntero = parseInt(joueur1.value); // a cada jugador 
    let numeroEntero2 = parseInt(joueur2.value); // lo convierto en numero entero
    
    while (numeroEmoji > 0) {
        phrase.innerHTML = " Il y a " + numeroEmoji + " emojis. Combien des emojis voulez-vous retirer ?";
        if (isNaN(numeroEntero) || isNaN(numeroEntero2) || numeroEntero <= 0 || numeroEntero2 <= 0) {
            phrase.innerHTML = "Veuillez entrer un nombre valide";
        } else if ((numeroEntero < 1 || numeroEntero > 6) || (numeroEntero2 < 1 || numeroEntero2 > 6)) {
            phrase.innerHTML = " Vous pouvez retirer uniquement de 1 à 6 emojis par tour";
        } else if (numeroEntero > numeroEmoji || numeroEntero2 > numeroEmoji) {
            phrase.innerHTML = " Il n'y a pas assez d'emojis. il en reste que " + numeroEmoji + ".";
        } else {
            // Aquí restar los emojis si todo está bien
            numeroEmoji -= (numeroEntero + numeroEntero2);
            phrase.innerHTML = " Il reste " + numeroEmoji + " emojis.";
        }
    }
}

button.addEventListener('click', utilisateurEnlever);
