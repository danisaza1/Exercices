function calculerSommeTableau(tableau) {
    if (!Array.isArray(tableau)) {  //aqui verifica si arr es un tableau. array.isarray es una funcion de JS y con el ! quiere decir que no es un tableau. el nombre de arr es importante porque esto lo converite en un tableau
        return "Erreur: Vous devez passer un tableau de nombres";
    }

    let start = 0;
    for (let i = 0; i < tableau.length; i++) {
        if (isNaN(tableau[i])) { // verifica si arr[i] no es un numero
            return "Erreur: Vous devez passer un tableau de nombres"; // Arrête la fonction et retourne une erreur
        }
        start += tableau[i];
    }
    return start;
}


console.log(calculerSommeTableau([1, 2, 3, 4])); // Devrait retourner 10
console.log(calculerSommeTableau([1, 2])); // Devrait retourner 3
console.log(calculerSommeTableau([0])); // Devrait retourner 0
console.log(calculerSommeTableau([1, 0])) // Devrait retourner 1
console.log(calculerSommeTableau([1, "Haha"])) // Devrait retourner 1
console.log(calculerSommeTableau()) // Devrait retourner "Erreur: Vous devez passer un tableau de nombres"
console.log(calculerSommeTableau("Huhu")) // Devrait retourner "Erreur: Vous devez passer un tableau de nombres" 