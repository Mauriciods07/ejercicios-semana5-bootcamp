/* 
    Arrow function
    función de flecha
*/

// función normal
/* function sumar(numero1, numero2) {
    // Operaciones o código a ejecutar
    return numero1 + numero2;
} */

// función flecha
const sumar = (numero1, numero2) => {
    return numero1 + numero2;
}

let numero1 = parseInt(prompt('Número 1'));
let numero2 = parseInt(prompt('Número 2'));
let suma = sumar(numero1, numero2)

document.write(`La suma de ${numero1} + ${numero2} es ${suma} <br><br>`);
