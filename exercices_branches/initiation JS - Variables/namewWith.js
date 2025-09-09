const namesWith = (letter, names) => {
    const newNames = [];
    //on itere sur tous les noms
    for (const name of names) {
        //on utiliser toLowerCase pour gerer les lettres majuscules commes les miniscules
        //puis on verfifie si le nom courqnt contient la lettre
        if (name.toLowerCase().includes(letter)) {
            newNames.push(name); 
            //si oui, on l'ajoute a la nouvelle liste de nom

        }
    }
    //on retourne la nouvelle liste apres etre passe sur tous les noms 
}