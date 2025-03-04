


function myNumberIsPosi(numberCond) {  
    if (numberCond >= 0) {
        return "Mon nombre est positif";
    } else {
        return "Mon nombre est négatif";
    }
}

console.log(myNumberIsPosi());
console.log(myNumberIsPosi(-8));
console.log(myNumberIsPosi(0));
console.log(myNumberIsPosi(10));
console.log(myNumberIsPosi(6));

