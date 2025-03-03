

let un = 1
let deux = 2
let trois = 3
// si les variables son utilises en plusierus functiones est mieux de 
// le laisser a l'exterieur, mais si on veut juste une seule function
// on peut le mettre a l'exterieur ou a l'interieur.

function addition3number(number1, number2, number3)    //-->declare 
{
	console.log("Le résultat de la somme est ", number1 + number2 + number3);
	console.log(`Le résultat de la somme est ${number1 + number2 +number3}`);
}

addition3number(un, deux, trois)      //--> appeler 



let a = 4 
let b = 6
let c = 9
function addition3NumbersWithArg(a, b, c)
{
	let somme =  a + b + c ;
	console.log("Le résultat de la somme est", somme )
}
addition3NumbersWithArg(a, b, c);
 




function addition3NumbersWithArg(a, b, c)
{
	let somme =  a + b + c ;
	console.log("Le résultat de la somme est", somme )
}

addition3NumbersWithArg(2, 4, 9)
addition3NumbersWithArg(8, 9, 8)
addition3NumbersWithArg(6, 4, 6)






