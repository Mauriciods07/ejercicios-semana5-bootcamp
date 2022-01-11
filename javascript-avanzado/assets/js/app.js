let title = document.getElementById('title');

console.log(title);
title.textContent = 'Este texto está escrito desde Javascript';

let parrafos = document.getElementsByTagName('p');
console.log(parrafos);

/* parrafos[0].textContent = 'Parrafos escritos desde Javascript'; */

/* parrafos.array.forEach( function(parrafo){
    parrafo.textContent = `Párrafo ${i+1} modificado desde JavaScript`;
}); */

/* for(let i=0; i<parrafos.length; i++) {
    parrafos[i].textContent = `Parrafo ${i+1} modificado desde Javascript`;
} */

let email = document.getElementById('email');
let password = document.getElementById('password');

function getInformation() {
    console.log(email);
    console.log(password.value);
}