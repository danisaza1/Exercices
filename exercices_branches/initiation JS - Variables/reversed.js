let original = "coucou ! Alors les vacances ??'";
let reversed = "";

for (let i = original.length - 1; i >= 0; i--) {
    reversed += original[i];
}

console.log(reversed);

===> //aqui sale negativo porque coo hay dos reversed, entonces se chocan entre los dos 



const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]


// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);
// Expected output: "array1:" Array ["three", "two", "one"]


const reverseArray = (arr) => { 
    const newArr = []; 
    // on passe sur chaque item du tabelau dans l'ordre
    for (const item of arr) {
        //on ajoute l'item au debut a chaque fois 
        //ce qui permet d'inverser l'ordre
        newArr.unshift(item);
    }
    // on retourne le nouveau tableau 
    return newArr;
}