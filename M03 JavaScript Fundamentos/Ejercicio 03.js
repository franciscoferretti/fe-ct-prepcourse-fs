/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
   if(x === y){
      return true;
   }else{
      return false
   }
}
let resutadoIguales = sonIguales(7,"7");
console.log(resutadoIguales)

function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
   if(str1.length === str2.length){
      return true;
   }else{
      return false;
   }
}
let resultadoLongitud = tienenMismaLongitud("holaaaaaa", "holaaaaaaaaaaa");
console.log( resultadoLongitud);
function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
   if(num < 90){
      return true;
   }else{
      return false;
   }
}
let resmenorqnoventa = menosQueNoventa(125);
console.log(resmenorqnoventa);

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   if(num > 50){
      return true;
   }else{
      return false;
   }
}
let resmayorcincuenta =  mayorQueCincuenta(52);
console.log(resmayorcincuenta);
function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
   if( num % 2 === 0){
      return true;
   }else{
      return false;
   }
}
let resespar = esPar(13);
console.log(resespar);
function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
   if( num % 2 === 1){
      return true;
   }else{
      return false;
   }
}
let resesimpar = esPar(10);
console.log(resesimpar);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
