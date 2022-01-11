date = new Date();
const today = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
let year = 0;
let month = 1;
let day = 2;
/* console.log(today); */

function calculateAge() {
    let dateBth = document.getElementById('dateBth').value.split('-');
    /* let Bth = new Date(dateBth[2],dateBth[1],dateBth[0]) */
    let age = today[0] - dateBth[0];

    if (today[month] < dateBth[month] ||
        (today[month] == dateBth[month] && today[day] > dateBth[day])) {
        age -= 1;
    }

    console.log(age);

    let guess = document.getElementById('guess');

    if (age < 0){
        guess.innerHTML = `¿Edad negativa? Eso es nuevo`;
    }
    else if (age > 130) {
        guess.innerHTML = `¡Pásame un tip para vivir tanto!`;
    }
    else {
        guess.innerHTML = `¡Tienes ${age} años!`;
    }
}