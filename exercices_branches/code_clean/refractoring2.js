function informationsUtilisateur(donneesPersoBrut, donneesPersoutilisateur) {
    return `${donneesPersoBrut} : ${donneesPersoutilisateur}\n`;
  }
  
function statutAbonnement(estAbonne) {
    return informationsUtilisateur("Statut", estAbonne ? "Abonné" : "Non abonné");
    // el operador ? : es una forma corta de escribir una 
    // condicion en una sola linea entonces es 
    // condicion ? valor si true : valeur si false
}


function categorieAge(age) {
if (age < 18) return informationsUtilisateur("Catégorie", "Jeune");
if (age < 60) return informationsUtilisateur("Catégorie", "Adulte");
return informationsUtilisateur("Catégorie", "Senior");
}  

function genererRapportUtilisateur(nom, age, ville, profession, estAbonne) {
    let rapport = "Rapport utilisateur =\n";
    rapport += informationsUtilisateur("Nom", nom);
    rapport += informationsUtilisateur("Age", `${age} ans`);
    rapport += informationsUtilisateur("Ville", ville);
    rapport += informationsUtilisateur("Profession", profession);
    rapport += statutAbonnement(estAbonne);
    rapport += categorieAge(age);
    return rapport;
  }

  console.log(genererRapportUtilisateur("Lucía", 25, "Madrid", "Diseñadora", true));
