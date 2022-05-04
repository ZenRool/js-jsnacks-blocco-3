// 1. Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

const arr1 = [39 , 123 , 321 , 12 , 213 , 12 , 2134, 214, 2134, 234 , 41];
const arr2 = [123231, 43124 , 12434 , 1432 , 1234 , 2341 , 2134 , 13324 ];
// lessArr punta all'indirizzo del array più corto
const lessArr = arr1.length > arr2.length ? arr2 : arr1;


// finchè non sono lunghi uguali gli array metti nel più corto un numero casuale 
while (arr1.length !== arr2.length) {
    lessArr.push(getRandomInt(0, 100));
}
console.log(arr1.length , arr2.length);
console.log(arr1 , arr2);





// Random Integer number 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}