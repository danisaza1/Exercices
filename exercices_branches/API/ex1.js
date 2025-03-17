async function fetchOffers() {
    // Récupérer les données de l'API
        const reponse = await fetch ('https://dummyjson.com/recipes/meal-type/dinner'); 
        const data = await reponse.json();
     
  // on modifier le HTML du body en fonction des données récupérées
	document.body.innerHTML = `<h1>${data.recipes.length} recipes</h1>`;
	
	for (const recipes of data.recipes) {
		// on ajoute à la suite le HTML correspondant à chaque post
		document.body.innerHTML += `<h2>${recipes.name}</h2>`;
		document.body.innerHTML += `<p>${recipes.mealType}</p>`;
	}   
        }
        
        fetchOffers()
        








