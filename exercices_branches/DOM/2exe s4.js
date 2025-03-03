const horoscope = [
    { 
      sign: 'Bélier',
      description: "Cette développeuse·eur est toujours prête à débugger avec le casque de la bravoure, même si cela signifie se lancer tête la première dans un tas d'erreurs de syntaxe.",
    },
    {
      sign: 'Taureau',
      description: "Aussi obstiné·e qu'un bug qui ne veut pas être résolu, cette développeuse·eur ne s'arrêtera pas avant que son code soit aussi solide qu'un mur de pierre.",
    },
    {
      sign: 'Gémeaux',
      description: "Capable de parler Java et Python en même temps, cette développeuse·eur est aussi adaptable qu'un caméléon dans une boîte de crayons de couleur.",
    },
    {
      sign: 'Cancer',
      description: 'La personne développeuse qui protège son code comme une maman lionne avec ses petits. Elle vous donnera un coup de patte si vous touchez à sa précieuse base de données.',
    }
  ];
  
const horoscopee = document.getElementById('horoscope');

  
  for (const item of horoscope) {


  let elementArticle = document.createElement ('article');
  let titre = document.createElement ('h2');
  titre.innerText = item.sign;
  let description = document.createElement ('p');
  description.innerText = item.description;


elementArticle.appendChild(titre);
elementArticle.appendChild(description);
horoscopee.appendChild(elementArticle);  
}; // aqui podemos hacer sea una variable 
// como hice aqui que puse arriba const horoscopee, 
// sino lo que puedo hacer simplemente es document.getElementById('horoscope').appendChild(elementArticle); 





// // PODEMOS HACER ITEM PAR ITEM,PERO PODEMOS HACER TODO
// // ENTERO PARA EVITAR ESCRIBIR TODO POR UNO.porque arriba es un boucle!



// for (const item of horoscope) {      
// let belier = document.createElement ('article');
// let titre = document.createElement ('h2');
// titre.textContent = 'Bélier';
// let description = document.createElement ('p');
// description.textContent = horoscope[0].description;

// let taureau = document.createElement ('article');
// let titre2 = document.createElement ('h2');
// titre2.textContent = 'Taureau';
// let description2 = document.createElement ('p');
// description2.textContent = horoscope[1].description;

// let gemeaux = document.createElement ('article');
// let titre3 = document.createElement ('h2');
// titre3.textContent = 'Gemeaux';
// let description3 = document.createElement ('p');
// description3.textContent = horoscope[2].description;

// let cancer = document.createElement ('article');
// let titre4 = document.createElement ('h2');
// titre4.textContent = 'Cancer';
// let description4 = document.createElement ('p');
// description4.textContent = horoscope[3].description;


// belier.appendChild(titre);
// belier.appendChild(description);
// document.body.appendChild(belier);

// taureau.appendChild(titre2);
// taureau.appendChild(description2)
// document.body.appendChild(taureau);

// gemeaux.appendChild(titre3);
// gemeaux.appendChild(description3)
// document.body.appendChild(gemeaux);

// cancer.appendChild(titre4);
// cancer.appendChild(description4)
// document.body.appendChild(cancer);


// horoscope.appendChild(belier)
// horoscope.appendChild(taureau);
// horoscope.appendChild(gemeaux);
// horoscope.appendChild(cancer);

// };

