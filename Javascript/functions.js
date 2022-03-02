//Molestando con funciones

/* Ante de hacer funciones recordemos como se manejan los objetos*/
var array = [{'name': 'Goku', 'power': 'ssj'}, {'name': 'vegeta', 'power': 'ssj'}];

console.log(array[0]);
console.log(array[0]['name']);

/* Ahora si entramos con las funciones*/
function calcularSuma() {

    let resultSuma = 2 + 2;
    console.log(resultSuma);    
}
calcularSuma();

//De manera mas dinamica la función de arriba
function calcularSuma(PrimerDato,segundoDato) {

    let resultSuma = PrimerDato + segundoDato;
    return resultSuma;
}
console.log(calcularSuma(2,2));

//ES6 Arrow function simplificando las funciónes de la linea 10 / 17
let add = (PrimerDato, segundoDato) => {return PrimerDato + segundoDato}
console.log(add(2 , 2));

//One expression
let oneExpression = (PrimerDato, segundoDato) =>  PrimerDato + segundoDato;
console.log(oneExpression(2 , 2));

//One parameter
let oneParameter = x => x + 2;
console.log(oneParameter(3));

//Without arguments
let sayHi = () => console.log('Hola')

//Arguments Binding
let myFunc = {
    calcularSuma() {
        return arguments[0] + arguments[1];
    },
    calcularResta() {
        return arguments[0] - 10;
    },
    sumaDinamica(){
        let _sumaDinamica = [...arguments];
        const reducer = (previusValue, currentValue) => previusValue +currentValue;
        
        let result = _sumaDinamica.reduce(reducer);
        return result;
    }
}
console.log(myFunc.calcularSuma(1,1))
console.log(myFunc.calcularResta(9))
console.log(myFunc.sumaDinamica(2,2,2,2,2))