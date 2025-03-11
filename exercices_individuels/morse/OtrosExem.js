const latinToMorse =  {
    'A':'.-',
    'B':'-...',
    'C':'-.-.',
    'D':'-..',
    'E':'.',
    'F':'..-.',
    'G':'--.',
    'H':'....',
    'I':'..',
    'J':'.---',
    'K':'-.-',
    'L':'.-..',
    'M':'--',
    'N':'-.',
    'O':'---',
    'P':'.--.',
    'Q':'--.-',
    'R':'.-.',
    'S':'...',
    'T':'-',
    'U':'..-',
    'V':'...-',
    'W':'.--',
    'X':'-..-',
    'Y':'-.--',
    'Z':'--..',
    ' ': ' '   // son objetos, quiere decir una coleccion de 
    // pares clave-valor, donde lo primero es una key osea un 
    // identificador unico y los valores adentro de la variable 
    // son datos y son varios. ex : a key / _.. valor  
    // por eso no puedo utilizar split 
};



const morseToLatin = {
    '-': "T",
    '--': "M",
    '---': "O",
    '--.': "G",
    '--.-': "Q",
    '--..': "Z",
    '-.': "N",
    '-.-': "K",
    '-.--': "Y",
    '-.-.': "C",
    '-..': "D",
    '-..-': "X",
    '-...': "B",
    '.': "E",
    '.-': "A",
    '.--': "W",
    '.---': "J",
    '.--.': "P",
    '.-.': "R",
    '.-..': "L",
    '..': "I",
    '..-': "U",
    '..-.': "F",
    '...': "S",
    '...-': "V",
    '....': "H",
    ' ': " "
  }


// let codigo va mostrar la letra en el emplacement: 
function getLatinCharacterList() {
    let chaine = "hello, world"; // chaîne de caractères
    const separator = chaine.split(""); // divise la chaîne en un tableau de caractères
    let codigo = separator[9];
    console.log(codigo); // affiche le tableau con las palabras split
}
 getLatinCharacterList(); 
// siempre debo de llamar una funcion aun asi si 
// lo hago en console log porque sino no se va afficher




// function para cambiar de latin a morse pero soy yo la que pone la letra en changement
function  translateLatinCharacter () {
    let latin = Object.keys(latinToMorse); // obtiene las claves,aqui latin 
    let morse = Object.values(latinToMorse); // obtiene los valores, aqui morse
    let changement = 'a';  //aqui pongo la letra que quiero cambiar en latin a morse
    let morsecodigo =  latinToMorse [changement.toUpperCase()];
    //variable = objeto [ aqui ponemos changemnet /ce que je veux changer/]
    //toUpperCase cambia la letra a mayuscula
    console.log(morsecodigo); 
}
translateLatinCharacter ()


//function para cambiar de latin a morse PERO map es avanzado
function encode () {
    let palabra = "hello world";
    const separar = palabra.split('');
    let convertir = separar.map (function (letra) { 
        // map va a buscar cada letra en los objetos para ver si corresponde
        //letra equivale al nuevo nombre que le damos a 
        // cada letra de palabra, aqui hello world, osea h: letra, e:letra. 
        return latinToMorse[letra.toUpperCase()];
    })
    console.log(convertir);
}
encode();



//function para cambiar de latin a morse
function encode () {
    let palabra = "hello world";
    const separar = palabra.split('');
    // Usamos un bucle for clásico para iterar sobre cada letra de 'separar'
    for (let i = 0; i < separar.length; i++) {
        // Accedemos a cada letra en el arreglo separar usando el índice i
        let letra = separar[i];

        // Aquí puedes usar latinToMorse para convertir la letra a su representación en Morse
        let morse = latinToMorse[letra.toUpperCase()];
        console.log(morse);  // Mostramos el código Morse correspondiente a cada letra
    }
}

encode()




//functio para cambiar de morse a latin
function decode () {
    //aqui tenemos un tableau y solo tiene 1! chaine de caracteres 
    const palabraMorse = ["...././.-../.-../---/ /.--/---/.-./.-../-.."];
        // On accède au premier (et unique) élément du tableau et on le sépare en un tableau de symboles Morse,
        //como es un chaine de caracteres, los devidimos con / por eso split/
        // paso de "....../...."  => "...,  ._, ..,"
    let separarMose = palabraMorse[0].split('/');
     // On parcourt chaque lettre Morse et on la traduit
     let decodedMessage = '';
    // Usamos un bucle for clásico para iterar sobre cada letra de 'separar'
    for (let i = 0; i < separarMose.length; i++) {
        // Accedemos a cada letra en el arreglo separar usando el índice i
        let letra = separarMose[i];
        // Aquí puedes usar morseToLatin para convertir la letra a su representación en latin
        let latin = morseToLatin[letra];
        if (latin) {
            decodedMessage += latin;  // On ajoute la lettre correspondante au message
        } else {
            decodedMessage += '?';  // Si la lettre Morse n'est pas trouvée, on ajoute un point d'interrogation
        }
    }
    console.log(decodedMessage);  // Mostramos el código latin correspondiente a cada letra
}
decode()