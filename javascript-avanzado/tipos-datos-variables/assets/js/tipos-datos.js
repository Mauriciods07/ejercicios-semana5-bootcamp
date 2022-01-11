let nombre = 'Mau';
let edad = 20;
let tienesTrabajo = true;
let variableNull = null;
let variableUndefined;

console.log(typeof(nombre)); // String o cadenas
console.log(typeof(edad)); // Number
console.log(typeof(tienesTrabajo)); // Boolean
console.log(typeof(variableNull)); // null
console.log(typeof(variableUndefined)); // undefined

/* Comparación */
console.log(variableNull == variableUndefined);  // true
console.log('1' == 1);  // true
console.log(0 == false);  // true

/* Comparación estricta */
console.log(variableNull === variableUndefined);  // false
console.log('1' === 1);  // false
console.log(0 === false);  // false

console.log('--------------------'); // String
console.log(typeof(10 + '10')); // number
console.log(typeof('10' + true)); // String
console.log(typeof(0 + true));
console.log('10'*3);
console.log(parseInt('12')); // color morado en consola

let numero = 10;
console.log(numero.toString());  // color negro en consola