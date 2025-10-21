/**1. Obtener el primer elemento del array
Enunciado: Dado un array, retorna el primer elemento del mismo. */

let arr=["Pedro","Juan","Pablo"];
console.log("array inicial es : "+arr);

let primerValor=arr[0]
console.log("El primer elemento del array es -> "+primerValor);



/**
 * 2. Obtener el último elemento del array
Enunciado: Dado un array, retorna el último elemento del mismo.
 */
let ultimoValor=arr[arr.length-1];
console.log("El ultimo valor del array es (sin modificar)-> "+ultimoValor);

/**3. Agregar un elemento al inicio del array
Enunciado: Agrega un elemento al inicio de un array y devuelve el array actualizado. */

let valorAAgregar="Sara";
arr.push(valorAAgregar);

console.log("Array despues de Añadir a Sara -> "+arr);
