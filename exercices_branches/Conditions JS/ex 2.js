function chauffeurAge(prenom, age) {  
    
    if (age <= 17) {
        return `${prenom}, vous n'êtes pas autorisé à conduire`;
    } else {
        return `${prenom}, vous êtes autorisé à conduire`;
    }
}

console.log(chauffeurAge("Mathieu", 22)); 
console.log(chauffeurAge("Léa", 15));     
console.log(chauffeurAge("Jean", 17));    

