// On crée une classe, comme une recette pour faire des chiens.
class Film {
  titre: string;
  dateSortie: Date;
  realisatrice: Realisatrice;

constructor(titre: string, dateSortie: Date, realisatrice: Realisatrice) {
    this.titre = titre;
    this.dateSortie = dateSortie;
    this.realisatrice = realisatrice;
    }

getName (): string {
    return this.titre;
    }
}


class Realisatrice {
    prenom: string;
    nom: string;

    
constructor(nombre: string,apellido: string) {
    this.prenom = nombre;   
    this.nom = apellido; 
    }   
}


const person = new Film (
    "Titanic", 
    new Date(),
    new Realisatrice("James", "Cameron"), 
);

console.log(person.getName()); // Imprime "Titanic"
console.log(person.realisatrice.nom) // cameron 