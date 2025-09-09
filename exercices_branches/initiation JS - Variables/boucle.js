
// on montre uniquement les deux en deux 
let index = 0;
while (index < 10) {
    index+=1;// cest la meme chose que arriba, 
    // pero como esta dos vez escrito, 
    // entonces de en vez de ajouter 1, ajoute 2, 
    // entonces por eso sale de dos en dos 
    index++;
    console.log(index); 
    }

    console.log('\n');  // faire un espace 


 // cest la meme que en haut sauf que on indique que cest par 2 et pas pas 1
let inde = 0;
while (inde <=10){
    console.log(inde);
     inde = inde+2;
    }

    console.log('\n');  // faire un espace 


// ici on fait avec des modules. on dit que 10 divise par 2 on arrive a 0
let ndex = 0;
while (ndex <= 10) {
  if (ndex % 2 == 0) {
    console.log(ndex);
  }
  ndex = ndex + 1;
}

console.log('\n');  // faire un espace 

// ici on fait les numeros alrevez
let pairs = 10;
    while (pairs >= 0) {
        console.log(pairs);
        pairs--;
        }

        console.log('\n');  // faire un espace 

// ici on fait les numeros alrevez pero de otra forma diferente   
let pair = 10;
    while (pair != -1) {
        console.log(pair);
        pair = pair - 1;
        }




        console.log('\n');  // faire un espace 



// ici on marque les boucles avec des conditions 
     
let index2 = 10;
    while (index2 != 0) {
        console.log(index2);
        index2 = index2 - 1; // aqui vemos que estamos haciendo la cuenta de 10
    if (index2 == 2) {
        console.log('A vos marques');  // aqui mostramos que antes del 3 mostamos una condition
            }
    if (index2 == 1){
        console.log('Prêt')
            }
    if (index2 == 0) {
        console.log('Partez !')
            }
        }



