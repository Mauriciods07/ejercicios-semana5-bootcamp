/* 
    Las funciones son bloques de código reutilizables
    Pueden tener o no tener parámetros de entrada
    Pueden tener o no salidas
*/

function sumar(numero1) {
    // Operaciones o código a ejecutar
    console.log('Hola desde la función');
    return numero1 + numero2;
}

function restar(numero1) {
    document.write(`La resta de ${numero1} - ${numero2} es ${numero1 - numero2} <br><br>`)
}

let numero1 = parseInt(prompt('Número 1'));
let numero2 = parseInt(prompt('Número 2'));
let suma = sumar(numero1, numero2);

// template string
// backtick o comilla invertida ``

document.write(`La suma de ${numero1} + ${numero2} es ${suma} <br><br>`);
restar(numero1, numero2);
document.write('La suma de ' + numero1 + ' + ' + numero2 + ' es ' + suma);