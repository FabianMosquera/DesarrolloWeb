//Molestando con los objetos en javascript

let objPersona = {
    'nombre': 'Ricky',
    'edad': 28,
    'casado': false,
    'saludar': () => {
        console.log('Que se dice');
    },
}
/*De esta manera agregamos una nueva llave con su respectivo valor al objeto*/
objPersona['apellido'] = 'Mosquera';
/*De esta manera cuando vamos a imprimir en consola lo vemos en forma de tabla a todo lo que tenga el objeto*/
console.table(objPersona);
/*De esta manera cuando vamos a imprimir en consola lo vemos en forma de tabla a algo especifico de lo que tenga el objeto*/
console.table(objPersona['nombre']);
console.table(objPersona.nombre);
/*De esta manera eliminamos algo del objeto o directamente el objeto*/
delete objPersona.casado;
/*De esta recorremos el objeto*/
for (let key in objPersona) {
    console.log(`${key}, value=${objPersona[key]}`);
}