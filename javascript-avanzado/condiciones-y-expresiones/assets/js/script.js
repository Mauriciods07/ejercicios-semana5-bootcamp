/* Operadores Aritméticos */
// + - / * % ()

let operacion = 3 * 5 + (10 - 5);
console.log(operacion);

let operacion2 = 3 - 5 / 2 * 4;
console.log(operacion2);

/* Operadores relacionales */
// <, >, >=, <=, ==, ===, !=, !==
// boolean true false

console.log(7 < 7); // no estamos incluyendo el número a comparar
console.log(7 >= 7); // incluyendo el número a comparar

console.log(7 == "7"); // compara el valor
console.log(7 === "7"); // compara el valor y el tipo de dato

console.log(7 != "7");
console.log(7 !== "7");

/* Incremento y decremento */
// +=, -=, *=, /=

let incremento = 5;
//incremento = incremento + 5;
incremento += 5; // incremento
console.log(incremento);

incremento -= 5;
// incremento = incremento - 5;
console.log(incremento);

incremento *= 5;
//incremento = incremento * 5;
console.log(incremento);

incremento /= 5;
//incremento = incremento / 5;
console.log(incremento);

/* Operador unario */
// ++, --
// sumar uno, restar uno

let sumar = 0;
console.log(sumar + " línea 49");
sumar++;
console.log(sumar + " línea 51");
sumar++;
console.log(sumar); // 2
sumar--;
sumar--;
sumar--;
console.log(sumar); // -1

/*  */
for (let i=0; i<10; i++) {
    /* código */
}
/* 
++variable = preincremento -primero modifica el valor y ya después hace uso de la variable
variable++ = postincremento - usando la variable y después hace el incremento
*/
let num = 5;
console.log(++num); // 6
console.log(num); // 6

for (let i=0; i<5; i++) {
    // iteración
    // primera iteración, se detiene
    console.log("Este es el ciclo padre");
    for (let j=0; j<5; j++) {
        // hace sus iteraciones propias
        console.log("Este es el ciclo hijo");
    }
}