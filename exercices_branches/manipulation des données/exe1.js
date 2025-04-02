const candidates = 
[
    'Le Filip',
    'Ruby On The Nail',
    'Leona Winter',
    'Lula Strega',
    'Misty Phoenix',
    'Perseo',
    'Norma Bell',
    'Edeha Noire',
    'Magnetica',
    'Afrodite Amour'
];

console.log(candidates[0])
console.log(candidates[7])
console.log(candidates[1])
console.log(candidates[2])
console.log(candidates[3])
console.log(candidates[4])
console.log(candidates[5])
console.log(candidates[6])



const afficherListe = document.getElementById("myliste");

candidates.forEach(function(candidates) {
 const liste =document.createElement("li");
 liste.textContent = candidates;
 afficherListe.appendChild(liste);
});
