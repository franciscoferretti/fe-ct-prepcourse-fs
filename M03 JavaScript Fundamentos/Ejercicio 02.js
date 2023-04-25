/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   return string
}
let resultadoString = devolverString("Hola como estas")
// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código: 
   return x + y;
}
let resultado = suma(5, 5);
console.log(resultado);
function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   return x - y ;
}
let resultadoResta = resta(25, 5);

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   return x / y ;
}
let resultadoDivide = divide(123, 3);

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   return x * y;
}
let resultadoMultiplica = multiplica(124, 5);
function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   return x % y ;
}
let resultadoResto = obtenerResto(251, 32);
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
