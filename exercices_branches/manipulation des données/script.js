const fs = require('fs');
const filepath = 'data.json';

const content = fs.readFileSync(filepath, {encoding: 'utf8', flag: 'r'});
const data = JSON.parse(content);



console.log(data[0])
console.log(data.length)
console.log(data[4])

let inicio = 0;
const addictionAge = 
data.forEach(item => {
    inicio += item.age;
})

const moyenAge = inicio 
const moyenLong = data.length
const resultat = moyenAge / moyenLong 
console.log(resultat)