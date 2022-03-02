/*Los arrays son objetos similares a una lista cuyo prototipo proporciona métodos para efectuar 
operaciones de recorrido y de mutación. Tanto la longitud como el tipo de los elementos de un array son variables. 
Dado que la longitud de un array puede cambiar en cualquier momento, y los datos se pueden almacenar en ubicaciones no contiguas, 
no hay garantía de que los arrays de JavaScript sean densos; esto depende de cómo el programador elija usarlos. En general estas 
características son cómodas, pero si, en su caso particular, no resultan deseables, puede considerar el uso de arrays con tipo.
*/

//Creación de un array
let _array = ['Hola',1,true];
//Mostrar por consola el array
console.log(_array);
//Mostrar por consola la longitud del array
console.log(_array.length);
//Mostrar por consola la posición del array
console.log(_array[0]);
//Agergando a la lista como si fuera pilas o colas una nueva posición (unshift: El dato entra al comienzo, push: El dato enrta al final)
_array.push('Empanada');
_array.unshift('pandebono');
//El método pop() elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.
_array.pop();
/*El método shift elimina el elemento en el índice cero y desplaza los valores consecutivos hacia abajo, devolviendo el valor eliminado. 
Si la propiedad length es 0, devuelve undefined.*/
_array.shift();
//El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
_array.splice(1,1);
//Saber en que posición se encuentra un elemento existente
console.log(_array.indexOf('Hola'));
//Copiar un array
let _array2 = [... _array];  