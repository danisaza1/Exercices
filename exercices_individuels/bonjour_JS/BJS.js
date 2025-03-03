



// //ETAPE 2: PREMIER CODE

// Créer la variable message avec un message de base
let message = "Bonjour !";
// Créer la variable firstname avec un prénom
let firstname = "Beyonce";
// Modifier la variable message pour inclure le prénom
message = "Bonjour " + firstname + " !";
// Afficher le nouveau message dans la console
console.log(message);

// OU 

// let firstaname = "Beyonce";
// let message = "Bonjour " + firstaname + " !"
// console.log(message);

// //-------------------------------





//  ETAPE 3: DANS UNE FONCTION

function sayHello () {
  let firstaname = "Beyonce";
  let message = "Bonjour " + firstaname + " !";
  console.log(message);
}
sayHello ()


//-----
// changer firstname comme parametre, entonces borro el let y lo pongo 
// adentro del ()

function sayHello (firstaname) {
  let message = "Bonjour " + firstaname + " !";
  console.log(message);
}
sayHello ()

//---- 
// para corregirlo, ya que sale bonjour undefined, 
// simplemente pongo el firstname 
// dentro de sayhello (), pero en l'appel

function sayHello (firstaname) {
  let message = "Bonjour " + firstaname + " !";
  console.log(message);
}
sayHello ('Beyonce')





//ETAPE 4: UN SECOND PARAMETRE

// puedo hacer : 
// function sayHello (firstaname) {
//   let message = "Bonjour " + firstaname + " !";
//   console.log(message);
// }
// sayHello ('Beyonce')


//  OU BIEN  (en la forma de la function,
//  antes utilice fonction ahora utilizo const)
const sayHello =(firstname, hour) => {
if (hour >= 18 ) {
  console.log("Bonsoir " + firstname + " !");
}
else { 
  console.log("Bonjour " + firstname + " !");
}
}

sayHello(`Beyonce`, 11);
sayHello(`Beyonce`, 18);
sayHello(`Beyonce`, 17);




