





// const pageTitle = document.querySelector('h1');
// pageTitle.innerText = 'Mes recettes'

// //OU


let pageTitle = document.querySelector('h1');
let subButton = document.getElementById('newsletter');
let hasSubscribed = false;


subButton.addEventListener ( 'click', () => {
    // los paranthesis que estan en rosado toman en cuenta un parametro, 
    // entonces aqui espera el click para hacer los enventos que le decimos y no es una funcion en si.
    console.log (hasSubscribed)

    if (hasSubscribed == false) {
        pageTitle.innerHTML = `Mes recettes`;
        subButton.innerText = 'Unsubscribe'; 
        hasSubscribed = true;   // aqui se para la funcion y 
        // devuelve al valor inicial que aqui es false, 
        // por eso se hace como una boucle
    } else if (hasSubscribed == true) {
        pageTitle.innerHTML = `Mes recettes de saison 😋`;
        subButton.innerText = 'Subscribe';
        hasSubscribed = false;
    }});



    