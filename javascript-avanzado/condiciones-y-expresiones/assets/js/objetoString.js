let cadena1 = "Hola";
console.log(cadena1);

let cadena2 = new String("Adiós");
console.log(cadena2);

// includes() busca una cadena en otra y regresa true o false
console.log(cadena2.toLowerCase().includes("a"));
// convierte a minúsculas o mayúsculas
console.log(cadena2.toLowerCase());
console.log(cadena2.toUpperCase());

// cohersión y conversión

// cohersión - JavaScript convierte en automático un tipo de dato en otro
console.log(cadena1.toLowerCase());

function invertirPalabra() {
    let string = document.getElementById('word').value;
    let showWord = document.getElementById('show-word');
    stringReversed = string.split("").reverse().join("");
    
    showWord.innerHTML = `<p>Palabra: ${string}</p>
                            <p id="ReversedWord">Palabra invertida: ${stringReversed}</p>`

    let reversedWord = document.getElementById('ReversedWord');
    reversedWord.style.fontWeight = "bold";
}
