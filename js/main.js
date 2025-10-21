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
arr.unshift("Sara");
console.log("Array despues de Añadir a Sara al inicio -> "+arr);


/**5. Agregar un elemento al final del array
Enunciado: Agrega un elemento al final de un array y devuelve el array actualizado. */

arr.push("Miguel")
console.log("Array despues de eliminar en el ultimo elemento -> "+arr);

/**
 * 7. Combinar dos arrays
Enunciado: Dado dos arrays, combínalos en uno solo y retorna el resultado.
 */

let arr2=["Vitoria","Bilbao","Donosti"];
let nuevoarr=arr.concat(arr2);
console.log("Combinando arrays (Vitoria","Bilbao","Donosti) -> "+nuevoarr);

/**
 * 8. Encontrar si un array incluye un elemento
Enunciado: Dado un array y un elemento, verifica si el array contiene ese elemento.
 */

let mensaje="No contiene el elemento buscado"

if(arr.includes("Pablo")) mensaje="El array sí continene el elemento Buscado (Pablo)";
console.log(mensaje);

/**
 * 9. Buscar el índice de un elemento
Enunciado: Dado un array y un elemento, encuentra el índice de la primera aparición de dicho elemento.
 */

let indice=arr.indexOf("Juan");
console.log("el elemento con valor Juan se encuentra en el indice "+indice);

/**10. Reemplazar un elemento en un array
Enunciado: Dado un array, reemplaza un elemento en un índice específico por otro y devuelve el array modificado. */

let nuevoNombre="Roberto"
arr[0]="Sonia";

console.log("Nuevo valor Sonia en el indice cero "+arr);

/**
 * 11. Sumar todos los elementos del array
Enunciado: Dado un array de números, suma todos sus elementos y devuelve el resultado.
 */

let numeros = [1, 2, 3, 4, 5];
let suma = 0;
numeros.forEach(function(numero){
        suma += numero;
    });
 console.log("La suma de todos los valores del array es: "+suma);

 /**
  * 12. Multiplicar todos los elementos del array
Enunciado: Dado un array de números, multiplica cada elemento por un valor específico y devuelve el nuevo array.
  */

let multi=2;
numeros.map(function(elemento) {
  return elemento * multi;
});
 console.log("La suma de todos los valores del array es: "+numeros);




 /***NO COMPLETADO */


 /**13. Filtrar números mayores a un valor
Enunciado: Dado un array de números y un valor, devuelve un nuevo array con los números que sean mayores a ese valor.

14. Verificar si todos los elementos son mayores a un número
Enunciado: Dado un array de números y un valor, verifica si todos los elementos del array son mayores a ese valor.

15. Obtener el primer elemento que cumple una condición
Enunciado: Dado un array de números y un valor, encuentra el primer número que sea mayor al valor dado.

16. Imprimir cada elemento del array
Enunciado: Dado un array de números, recorre el array e imprime cada uno de sus elementos en la consola.

17. Crear un array con el doble de cada número
Enunciado: Dado un array de números, genera un nuevo array en el que cada número sea el doble de su valor original.

18. Convertir un array de nombres en mayúsculas
Enunciado: Dado un array de nombres (strings), genera un nuevo array donde cada nombre esté en mayúsculas. */