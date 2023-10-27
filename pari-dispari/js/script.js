// Esecuzione
const userChoice = prompt("Dimmi pari o dispari");

// COntrollo se userCoice va bene

let userNumber = parseInt(prompt("Dimmi un numero tra 1 e 5"));

while(userNumber > 5 || userNumber < 1) {
    userNumber = parseInt(prompt("Dimmi un numero tra 1 e 5"));
}

const computerNumber = getRndInteger(1,5);
console.log(userChoice, userNumber, computerNumber);

const numbersSum = userNumber + computerNumber;
const sumResult = isPariDispari(numbersSum);
console.log(numbersSum, sumResult);

if(userChoice === sumResult) {
    console.log("Hai vinto");
} else {
    console.log("Hai perso");
}

/*********************/
// Funzioni

/**
 * La funzione che genera un numero random compreso tra mi e max
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


/**
 * Dato un numero verifica se è pari o dispari
 * @param {number} numberToCheck
 * @returns {string} "pari" se il numero è pari, dispari altrimenti
 */
function isPariDispari(numberToCheck) {
    let result = "";
    if(numberToCheck % 2 === 0) {
        result = "pari";
    } else {
        result = "dispari";
    }
    return result;
}

// Test
// console.log(isPariDispari(5)); // dispari
// console.log(isPariDispari(6)); // pari