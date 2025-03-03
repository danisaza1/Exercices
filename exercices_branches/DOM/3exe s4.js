


const contarButton = document.getElementById('counter');
let count = 0;


contarButton.addEventListener ( 'click', function() {
    count++;
    contarButton.textContent = 'Clics : ' + count;
});








