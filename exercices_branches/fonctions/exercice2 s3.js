
const squaredNumber = (base, exposant) => Math.pow(base, exposant);
//ici const est egal a la function    &  aqui au lieu de retour on mets la fonction

let resultat = squaredNumber(3, 2);
console.log("3^2 :" + " " + resultat);  



const squaredNumber1 = (base, exposant) => Math.pow(base, exposant);

let resultat1 = squaredNumber1(2, 2);
console.log("2^2 :" + " " + resultat1);



const multiplierPa10 = (nb) => {
  console.log ('Je donne ' + nb + ' à ma fonction de multiplication, j’obtiens ' + nb * 10); 
}

 multiplierPa10(5)




//esto es igual que el de arriba
function carre (nb) {
    const resultat = nb * nb;
    return resultat;
}
const res = carre(3);  //-->variable egale a l'appel de la function
console.log(res)     // OU console.log(carre(3));



function multiplierPar10 (nb) {
    console.log (
    'Je donne ' + nb + ' à ma fonction de multiplication, j’obtiens ' + nb * 10); 
};

 multiplierPar10 (res);












 //---------------
 //pour voir le resultat je dois inspectionner le site web 

const param = prompt('Donne moi un nombre');

function carre(nb) {
  const resultat = nb * nb;
  return resultat;
}

function multipleBy10(nb) {
  console.log(
    'Je donne ' + nb + ' à ma fonction de multiplication, jobtiens ' + nb * 10
  );
}

multipleBy10(carre(param));

