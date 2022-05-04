

// **BONUS
// Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.
const oddDom = document.getElementById("red");
const evenDom = document.getElementById("green");
// Genero un array completamente casuale 
const array = [];
const arrayLength = getRandomInt(20, 30);
for (let i = 0; i < arrayLength; i++) {
    const num = getRandomInt(1, 100);
    array.push(num);
}
array.forEach(element => element % 2 ? oddDom.append(element, " | ") : evenDom.append(element, " | "));
// Random Integer number 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}