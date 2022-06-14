// L'utente indica un livello di difficoltà (con un prompt) in base al quale decidiamo il range di numeri possibili del gioco:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito attraverso dei prompt l'utente inserisce un numero alla volta finche il gioco non è finito:
// se il numero è presente nella lista dei numeri generati, abbiamo calpestato una bomba, il gioco finisce con un messaggio di errore
// Altrimenti il gioco va avanti a meno di aver raggiunto il numero massimo di tentativi possibili. In questo caso il gioco finisce con un messaggio di vittoria.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha scelto un numero che non era una bomba.

// ANALISI DELL'ESERCIZIO
// FASE PREPARATORIA:
// 1 - Chiediere un livello di difficoltà (1,2,3) all'utente, con un prompt 
    // se si sceglie 1, il range di numeri possibili del gioco è 1-100
    // se si sceglie 2, il range di numeri possibili del gioco è 1-81
    // se si sceglie 3, il range di numeri possibili del gioco è 1-49
let userDifficultyLevel = prompt('Scegli il livello di difficoltà: 1, 2 o 3');
console.log(userDifficultyLevel);

while(userDifficultyLevel !== '1' && userDifficultyLevel !== '2' && userDifficultyLevel !== '3') {
    userDifficultyLevel = prompt('Scegli il livello di difficoltà: 1, 2 o 3');
}
console.log(userDifficultyLevel);

let gameMaxRange;
switch(userDifficultyLevel) {
    case '1':
        gameMaxRange = 100;
        break;
    case '2':
        gameMaxRange = 81;
        break;
    case '3':
        gameMaxRange = 49;
        break;
}
console.log(gameMaxRange);
// 2- Generare 16 numeri random (bombe) 
// nello stesso range delle tre difficoltà:
// gameMinRange(1)-gameMaxRange(100 o 81 o 49)
const bombs = bombsGenerator(16, 1, gameMaxRange);
console.log(bombs);

// ----------
// FUNCTIONS
// ----------

// Generare un array di tot numero di elementi random 
// Inputs: 
    // numberOfArrayElements -> numero di elementi dell'array
    // rangeMin -> range minimo dei numeri random generati
    // rangeMax -> range massimo dei numeri random generati
// Output:
    // return -> array di elementi random con lunghezza numberOfArrayElements
function bombsGenerator(numberOfArrayElements, rangeMin, rangeMax) {
    // Creazione array vuoto
    const randomNumbersArray = [];
    // Finchè la lunghezza dell'array è inferiore al numero di elementi dell'arrey
    while(randomNumbersArray.length < numberOfArrayElements) {
        // Genero un numero random da rangeMin a rangeMax
        const randomNumber = getRndInteger(rangeMin, rangeMax);
        // Inserisco il numero nell'array solo se esso non è già presente 
        if(!randomNumbersArray.includes(randomNumber)) {
            randomNumbersArray.push(randomNumber);
        }
    }

    return randomNumbersArray;
}

// Funzione per generare un numero random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

// 3 - Numero max di tentativi possibili per ogni difficoltà scelta: gameMaxRange - bombe(16)

// FASE LOGICA:
// Finchè il gioco non è concluso 
    // L'utente inserisce un numero alla volta, tramite prompt
    // Se il numero è una bomba -> alert('Hai perso :(' + punteggio utente)
    // Altrimenti se il numero non è una bomba
        // Si inseriscono i numeri generati corretti in un array di numeri indovinati, soltanto se il numero non è già presente
        // Se l'utente ha raggiunto il numero max di tentativi possibili (lunghezza array di numeri indovinati === Numero max di tentativi) -> alert('Hai vinto!!! + punteggio utente')
        
