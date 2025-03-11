

//manera vieja de hacer una function de fetch
fetch('https://dummyjson.com/image/400x200/282828?fontFamily=pacifico&text=Hola+como+estas+!?')
//estamos utilizando un sitio de imagenes.
//fetch solicitud HTTP a un URL, aqui dummyjson
//aqui hay un texto en la imagen que podemos cambiar a partir de text= ....
.then(response => response.blob()) 
//obtiene la respuesta de fetch y la convierte en un blob
//blob es un objeto que representa datos binarios, aqui la imagen
.then(blob => {
    const mostrar = document.createElement("div"); // Crea un div
    const img = document.createElement("img"); // Crea una etiqueta img
    img.src = URL.createObjectURL(blob); // Convierte el blob en una URL para la imagen
    mostrar.appendChild(img); // Agrega la imagen al div
    document.body.appendChild(mostrar); // Agrega el div al body del documento
//aqui la imagen se maneja y la imprime en HTML 
})



//manera actualizada de hacer una function de fetch
async function afficheImage() {
        const reponse = await fetch ('https://dummyjson.com/image/600x200/282828?fontFamily=pacifico&text=Hola+como+estas+!?+segunda+persona'); 
        const offers = await reponse.blob();
        const mostrar = document.createElement("div"); // Crea un div
        const img = document.createElement("img"); // Crea una etiqueta img
        img.src = URL.createObjectURL(offers); // Convierte el blob en una URL para la imagen
        mostrar.appendChild(img); // Agrega la imagen al div
        document.body.appendChild(mostrar); // Agrega el div al body del documento
    //aqui la imagen se maneja y la imprime en HTML 
}

afficheImage ()