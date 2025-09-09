const dossierPrincipal = {
  nom: '🗂️ Ada',
  contenu: [{
      nom: '🗂️ Projets collectifs Ada',
      contenu: [{
          nom: '🗂️ Pico8',
          contenu: [{
            nom: '📄 mariokart.p8'
          }]
        },
        {
          nom: '🗂️ Dataviz',
          contenu: [{
              nom: '📄 index.html'
            },
            {
              nom: '📄 script.js'
            }
          ]
        }
      ]
    },
    {nom: '📄 CV.pdf'},
    {
      nom: '🗂️ Projets persos',
      contenu: [{
        nom: '🗂️ Portfolio',
        contenu: [{
            nom: '📄 index.html'
          },
          {
            nom: '📄 script.js'
          }
        ]
      }]
    },
  ],
}

function afficherDossier(dossierPrincipal) {
  console.log(dossierPrincipal.nom);
}

function afficherDossierIteratif(dossierPrincipal) {
   // On utilise une pile pour parcourir les dossiers
  const pile = [dossierPrincipal];

  while (pile.length > 0) {
    const courant = pile.pop();
    console.log(courant.nom);

    // Si le dossier a des sous-dossiers, on les ajoute à la pile
    if (courant.contenu) {
      for (let i = courant.contenu.length - 1; i >= 0; i--) {
        pile.push(courant.contenu[i]);
        }
    }
  }
}


function afficherDossierRecursif(dossierPrincipal)  {
  console.log(dossierPrincipal.nom);

  if (dossierPrincipal.contenu) {
    for (let contenu of dossierPrincipal.contenu) {
      afficherDossierRecursif(contenu); // Appel récursif
    }
  }
}



// afficherDossier(dossierPrincipal);
afficherDossierIteratif(dossierPrincipal)
afficherDossierRecursif(dossierPrincipal)  
