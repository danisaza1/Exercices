const buyTShirt = true;
const buyjeans = true;
const buySunGlasses = false;
let totalPrice = 0;

if (buyTShirt) {
totalPrice += 10; //x += y is equivalent to x = x + y, 
// except that the expression x is only evaluated once.
} 
else if (buyJeans) { // ya que es else if si el primero no se da
    //entonces este no se da.
totalPrice += 30;
} 
else if (buySunGlasses) {
totalPrice += 20;
} 
console. log(`The total price is ${totalPrice}$.`);


