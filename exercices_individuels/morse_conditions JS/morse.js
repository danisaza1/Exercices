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



let CapturarLatin = document.getElementById('latin');

function encode () {
    let palabra = CapturarLatin.value;
    const separar = palabra.split('');
    // Usamos un bucle for clásico para iterar sobre cada letra de 'separar'
    for (let i = 0; i < separar.length; i++) {
        // Accedemos a cada letra en el arreglo separar usando el índice i
        let letra = separar[i];

        // Aquí puedes usar latinToMorse para convertir la letra a su representación en Morse
        let morse = latinToMorse[letra.toUpperCase()];  
        const mostrar = document.createElement("p");
        mostrar.textContent = morse;   // Mostramos el código Morse correspondiente a cada letra
        document.querySelector('body').appendChild(mostrar)
    }
}


// Evento para latin a morse
CapturarLatin.addEventListener("change", () => {
    Capturar.style.display = 'inline-block';
    encode(); // Llamar a la función para actualizar 
});



let CapturarMorse = document.getElementById('morse');

function decode () {
    //aqui tenemos un tableau y solo tiene 1! chaine de caracteres 
    const palabraMorse = CapturarMorse.value.trim();// trim para quitar espacios innecesarios
    let separarMose = palabraMorse.split('/');
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
    const mostrar = document.createElement("p");
    mostrar.textContent = decodedMessage;   // Mostramos el código Morse correspondiente a cada letra
    document.querySelector('body').appendChild(mostrar)
   
}


// Evento para latin a morse
CapturarMorse.addEventListener("change", () => {
    CapturarMorse.style.display = 'inline-block';
    decode(); // Llamar a la función para actualizar 
});