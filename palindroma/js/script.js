// Esecuzione del programma
const userWord = prompt("Dimmi una prola e ti dico se è palindroma");

let message = "";

if(isPalindroma(userWord)) {
    message = "La parola è palindroma";
} else {
    message = "La parola non è palindroma";
}

console.log(message);


/*************************/
// Dichiarazioni delle funzioni
/**
 * La funzione che data una parola definisce se è una palindroma
 * @param {string} word la parola da analizzare
 * @returns {boolean} true se palindroma, false altrimenti
 */
function isPalindroma(word) {
    // inverto la parola: es: "ciao" ---> "oaic"
    const invWord = invertWord(word);
    // Se la parola inversa è uguale a originale
        // palindroma
    // Altirmenti
        // non è palindroma
    if(word === invWord) {
        return true;
    } else {
        return false;
    }
}

// Test
// console.log(isPalindroma("ciao")); // false
// console.log(isPalindroma("osso")); // true

/**
 * Data una parola ritorna parola inversa
 * @param {string} word la parola da invertire
 * @returns {string} la parola invertita
 */
function invertWord(word) {
    // creare la variabile per la parola inversa
    // partendo dalla fine della parola per ogni lettera
        // salvare la lettera nella variabile
    let invertWord = "";
    for(let i = word.length - 1; i >= 0; i--) {
        invertWord += word[i];
    }
    return invertWord;
}

// Test
// console.log(invertWord("pane"));

// const array1 = ["a", "b", "c"];
// const array2 = ["a", "b", "c"];

// console.log(array1 === array2); // Invece è false

