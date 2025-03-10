

    // async function fetchOffers() {
    //     // Récupérer les données de l'API
    //     const reponse = await fetch ('https://www.codepassport.dev/api/offers'); 
    //     const offers = await reponse.json();

    //     for (let i = 0; i < offers.length; i++) {
    //     let titreHTML = document.createElement("th");
    //     titreHTML.innerHTML = offers[i].titre;
    //     let technologieHtml = document.createElement ("td");
    //     technologieHtml.innerHTML = offers[i].technologie;
    //     let descriptionHtml = document.createElement ("td");
    //     descriptionHtml.innerHTML = offers[i].description;

    //     // // aqui hacemos appendChild para poner lo que creamos 
    //     // // en el body y asi aparezca en html
    //     document.querySelector('body').appendChild(titreHTML)
    //     document.querySelector('body').appendChild(technologieHtml)
    //     document.querySelector('body').appendChild(descriptionHtml)
    //     }
    // }
    // fetchOffers()
   



async function fetchOffers() {
// Récupérer les données de l'API
    const reponse = await fetch ('https://www.codepassport.dev/api/offers'); 
    const offers = await reponse.json();

for (let i = 0; i < offers.length; i++) {
    let titreHTML = document.createElement("th");
    titreHTML.innerHTML = offers[i].titre;
    let technologieHtml = document.createElement ("td");
    technologieHtml.innerHTML = offers[i].technologie;
    let descriptionHtml = document.createElement ("td");
    descriptionHtml.innerHTML = offers[i].description;

// Crear una fila para agregar a la tabla
    let tr = document.createElement("tr");

// Agregar los elementos a la fila
    tr.appendChild(titreHTML);
    tr.appendChild(technologieHtml);
    tr.appendChild(descriptionHtml);

// Finalmente, agregar la fila a la tabla
//aqui utilizamos queryselector para no tener problemas 
// y ponemos el # para obtener el id
// tambien tbody para saber donde se pocisionan las lineas
document.querySelector("#myTable tbody").appendChild(tr);
}
}

fetchOffers()
   






    

