// Nous souhaitons faire la somme du prix de plusieurs articles
// Prix de deux articles
let article1 = 10;
let article2 = 20;
// Prix d'un troisieme article
let article3 = 50;

// Nous calculons le total
let total = article1 + article2;
// Nous ajoutons a3 au total
let totalAvecReduction = total + article3;

//Nous appliquons 20% de reduction
totalAvecReduction = total - total * 0.2;


console.log('Le prix total avant reduction est de : ', total);
console.log('Le prix total après reduction est de : ', totalAvecReduction);
