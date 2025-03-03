
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
    'Z':'--..'   // son objetos, quiere decir una coleccion de 
    // pares clave-valor, donde lo primero es una key osea un 
    // identificador unico y los valores adentro de la variable 
    // son datos y son varios. ex : a key / _.. valor  
    // por eso no puedo utilizar split 
};





function getLatinCharacterList() {
    let chaine = "hello, world"; // chaîne de caractères
    const separator = chaine.split(""); // divise la chaîne en un tableau de caractères
    let codigo = separator[0];
    console.log(codigo); // affiche le tableau con las palabras split
}
 getLatinCharacterList(); 
// siempre debo de llamar una funcion aun asi si 
// lo hago en console log porque sino no se va afficher




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





function encode () {
    let palabra = "hello world";
    const separar = palabra.split('');
    let convertir = separar.map (function (letra) { // map va a buscar cada letra en los objetos para ver si corresponde
        return latinToMorse[letra.toUpperCase()];
    })
    console.log(convertir);
}
encode();