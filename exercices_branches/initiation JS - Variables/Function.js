

//FUNCION SIN ENCAPSULAMIENTO:

let message = "Bonjour !";
let firsttname = "Beyonce";

message = "Bonjour " + firsttname + " !";
console.log(message);




let firstname = 'monica';
let FIRSTNAME = 'rachel';
let FirstName = 'phoebe';

FIRSTNAME ='JOE'
console.log(FIRSTNAME) //si arriba estan varios firstaname,
// e inclusive hay uno que es con mayusculas, como es un let,
// entonces va a llamar el ultimo function.




let a = 5;
let b = 3;
a = a+1
console.log(a) // aqui dice a que es igual 5 mas uno entonces es 6







//-------------------------



function addition(a, b, c, d) {
    let resultat = a + b + c + d;
    console.log('le resultat est : ' + resultat);
  }
  
  addition(1, 5, 2, 0);
  
  function halfPrice(price) {
    const newPrice = price / 2;
    console.log(newPrice);
  }
  
  halfPrice(15);
  halfPrice(30);

//OU

function halfPrice(price) {
    let newPrice = price/2
    console.log('la mitad de este numero es : ' + newPrice);
        } 

halfPrice(40);







//----------------------------------------



//FONCTION
//je declare une fonction + nom + parametre 
function say(name)
{
console.log("Bonjour à toi ", name)
// Je peux avoir autant de ligne que j'en ai besoin dans la fonction

}// Ici se termine la définition de la fonction


// /Je déclare une variable contenant la valeur du parametre
let myName = "Ada Lovelace"
let yourName = "Futur.e Développeur.se"

//J'appelle la fonction APRES l'avoir déclaré
// en lui donnant comme argument myName 
say(myName)
say(myName) 
say(yourName + "hola")
//Nous pouvons appeler plusieurs fois une même fonction
// C’est le principe d’une fonction : pouvoir l’appeler plusieurs fois 
// pour faire la même action sans avoir à la coder de nouveau 









//--------------------------------

//AUTRE EXEMPLE DE FONCTION
// Je déclare une fonction avec deux paramètres
function add(number1, number2)
{
return (number1 + number2)
//Avec le mot clé return , la fonction add nous retourne 
// le résultat de l’opération number1 + number2 et nous 
// pouvons le stocker dans une variable pour l’appeler ensuite.
}

// Je déclare trois variables
let ten = 10
let eight = 8
let nine = 9

//Je déclarer une variable et je lui assigne le retour de la fonction add
let result = add(ten, nine)
console.log("La somme est égale à", result)




//-----------------------------



//function avec plsuierus strucutres 


function reverseArray (arr) { 
  const newArr = [1, 2, 3, 4];
  // on passe sur chaque item du tabelau dans l'ordre
  for (const item of arr) {
    //on ajoute l'item au debut a chaque fois 
    //ce qui permet d'inverser l'ordre
    newArr.unshift(item);
  }
//on retourne le nouveau tableau 
  return (newArr);   
};
console.log(reverseArray ([]));










