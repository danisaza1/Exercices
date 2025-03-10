



let message = '';
let letters = [ 'A', 'd', 'a', '-', 'T', 'e', 'c', 'h'];

for (i = 0; letters.length > i ; i++) {
    console.log(letters[i]) 
    // esto hace de que acedamos al elemento en la posicion i del arreglo letters
}

for (i = 0; letters.length > i ; i++) {
    message += letters[i]; 
    // esto hace de que acedamos al elemento en la posicion i del arreglo letters
}

console.log(message)