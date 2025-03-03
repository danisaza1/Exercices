// PONGO OTRO JS, PORQUE EN EL OTRO EXPLICO ETAPA POR ETAPA 

   
  function sayHello (firstname, hour) {
    if (hour >= 18) {
        return 'Bonsoir ' + firstname + ' !';
    } else {
        return 'Bonjour ' + firstname + ' !';
    }
};

// 2. Récupérer le prénom via prompt
let firstname = prompt("Please enter your name");
// 4. Afficher le message personnalisé dans l'élément h1
document.querySelector('h1').innerText = sayHello(firstname, 11);
 
  
//Ou tambien puedo hacer esto :

// const sayHello = (firstname, hour) => {
//     if (hour >= 18) {
//       return 'Bonsoir ' + firstname + ' !';
//     } else {
//       return 'Bonjour ' + firstname + ' !';
//     }
//   }
//   let firstname = prompt("Please enter your name");
//   document.querySelector('h1').innerText = sayHello(firstname, 1);




    