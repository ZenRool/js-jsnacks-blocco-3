// 2. Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando a somma degli elementi è minore di 50.

// Crea un array vuoto
const arr = [];
//Chiedi i numeri all’utente e a inserirli nell’array (fai)(finché)la somma è minore stretto di 50
let i = 0;
do {
    arr.push(getInputNumber(i));
    i++;
} while(summArray(arr) < 50);
console.log(arr, summArray(arr));



//Funzioni
//Chiedi i numeri all’utente un numero
function getInputNumber(index) {
    let num;
    do {
        num = parseInt(prompt(`Dammi il numero (${index})`)) ;
    } while(isNaN(num));
    return num;
}
// somma tutti gli elementi di un array 
function summArray(array) {
    let sum = 0;
    array.forEach(num => sum += num);
    return sum;
}
