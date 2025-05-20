function tryWord(word, base) {
    word = word.toLowerCase()
    base = base.toLowerCase()
    
	if (word === base) {
		return true
  } else {
  	let wellPlaced = [];
    let notInWord = [];
    let missplaced = [];
    
  	let arrayBase = base.split('');
    let arrayWord = word.split('');
    
		for (let i = 0; i < arrayBase.length; i++) {
    	if (arrayBase[i] === arrayWord[i]) {
      	wellPlaced.push(arrayWord[i]);
      }	else {
        missplaced.push(arrayWord[i])
      }
    }
    
    for (const char of arrayWord) {
    	if (arrayBase.includes(char) === false) {
      	notInWord.push(char)
      }
    }
    return { wellPlaced: wellPlaced, missplaced: missplaced, notInWord: notInWord }
  }
 
}



function guess() {
	let base = 'dictionnaire'
	let word = document.getElementById("word").value
	let result = tryWord(word, base)
  document.getElementById("word").value = ''
  document.getElementById("try").innerText = word

  if (result === true) {
    document.getElementById("win").innerText = 'Vous avez gagné!!'
    document.getElementById("well").style.display = 'none'
    document.getElementById("miss").style.display = 'none'
    document.getElementById("not").style.display = 'none'
    document.getElementById("try").style.display = 'none'
    } else {
    document.getElementById("well").innerText = 'Bien placé: '+result.wellPlaced.join(', ')
    document.getElementById("miss").innerText = 'Mal placé: '+result.missplaced.join(', ')
    document.getElementById("not").innerText = 'Pas dans le mot: '+result.notInWord.join(', ')
    }
}