/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   // Retorna el valor de "num" elevado al cuadrado.
   // Tu código:
   return num ** 2;
}
let resultadoCuadrado = elevarAlCuadrado(5);
console.log(resultadoCuadrado);

function elevarAlCubo(num) {
   // Retorna el valor de "num" elevado al cubo.
   // Tu código:
   return num ** 3;
}
let resultadoCubo = elevarAlCubo(5);
console.log(resultadoCubo);


function elevar(num, exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   // Tu código:
   return Math.pow(num,exponent);
}
let resultadoElevar = elevar(2,8);
console.log(resultadoElevar);

function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   // Tu código:
   return Math.round(num);
}
let resultadoRedondeo = redondearNumero(3.4);
console.log(resultadoRedondeo);

function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   // Tu código:
   return Math.ceil(num);
}
console.log(redondearHaciaArriba(3.1));
function numeroRandom() {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   // Tu código:
   let aleatorio = Math.random();
   return aleatorio;
}
console.log(numeroRandom());
// -----------
// function numeroRandom2(min,max){
// return Math.floor(Math.random() * (max - min + 1) + min);
// }
// console.log( numeroRandom2(1,15)); 

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
