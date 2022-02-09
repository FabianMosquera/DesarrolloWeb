//Molestando con los ciclos
//Usando un ciclo de cfor para mostrar los elementos del array.
const _array = ['a','b','c', ['d','e']];

let arrayFlattern = _array.flat();
_array.forEach(element => console.log(element));

//Usando otra manera igual de efectiva para recorrel el array.
const words = ['algo','como','cuando','donde'];
const result = words.filter(word)

//Otra manera de filtrar datos, con este agarro el primer dato que encuentra.

const _array1 = [5,1,2,6,4];
const found = _array1.find(element => element > 3);
console.log(found)

//Función que tambien sirve para futuro (sirve mucho para permisos de usuario)

const pets = ['gato','perro','pez','pajaro'];
console.log(pets.includes('gato'));

//Iterar con map

var numbers = [1,7,9,6,4];
var doubles = numbers.map(function(number) {
    return number * 2;
});
console.log(numbers);
console.log(doubles);

//iterar más castear

var numbers = [1,7,9,6,4];
var strNumbers = numbers.map(function(number) {
    return `${number}`;
});
console.log(numbers);
console.log(strNumbers);

//Otra manera de iterar
const array = [1,2,3,4];
const reducer = (previousValue, curreValue) =>previousValue + curreValue;
console.log(array.reduce(reducer));