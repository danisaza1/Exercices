


async function fetchOffers() {
        const reponse = await fetch ('https://www.codepassport.dev/api/offers'); 
        const offers = await reponse.json();
    
        let info = document.createElement('th');
        info.innerHTML = 'Titre';
        let info2 = document.createElement('th');
        info2.innerHTML = 'Technologie';
        let info3 = document.createElement('th');
        info3.innerHTML = 'Description';

        let infosss = document.createElement("tr");
        infosss.appendChild(info);
        infosss.appendChild(info2);
        infosss.appendChild(info3);
        document.querySelector("#myTable thead").appendChild(infosss);



    for (let i = 0; i < offers.length; i++) {
        let titreHTML = document.createElement("th");
        titreHTML.innerHTML = offers[i].titre;
        let technologieHtml = document.createElement ("td");
        technologieHtml.innerHTML = offers[i].technologie;
        let descriptionHtml = document.createElement ("td");
        descriptionHtml.innerHTML = offers[i].description;
    
        let tr = document.createElement("tr");
    
        tr.appendChild(titreHTML);
        tr.appendChild(technologieHtml);
        tr.appendChild(descriptionHtml);

    document.querySelector("#myTable tbody").appendChild(tr);
    }
    const desparecer = document.getElementById('loader')
    desparecer.style.display = 'none';
    }
    
fetchOffers();
       
    
    
    
    
    
    
        
    
    