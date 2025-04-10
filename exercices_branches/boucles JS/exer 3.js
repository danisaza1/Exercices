

let afficher = prompt('Donne moi un nombre entre 0 et 10');

// Vérifie si afficher est un nombre valide entre 0 et 10
while (isNaN(afficher) || afficher < 0 || afficher > 10) {
    afficher =prompt ('Donne moi un nombre ENTRE 0 et 10');
}

function mostrar () {
for (let i = afficher;                 i > 0;            i--) {
    let mensaje = document.getElementById('phrase');
    mensaje.innerHTML +=  i;
}}

mostrar()

