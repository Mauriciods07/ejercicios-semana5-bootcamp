/* 
    Buenos días 6 - 11
    Buenas tardes 12 - 18
    Buenas noches 19 - 23
    Déjame dormir 0 - 5
*/

let hora = parseInt(prompt("Ingresa la hora:"));

if (hora >= 6 && hora <= 11){
    console.log('Buenos días');
}
else if (hora >= 12 && hora <= 18){
    console.log('Buenas tardes');
}
else if (hora >= 19 && hora <= 23){
    console.log('Buenas noches');
} 
else if (hora >= 0 && hora <= 5){
    console.log('Déjame dormir');
}
else {
    console.log('Esa no es una hora >:(');
}

/* 
 No sirve xd
switch(hora) {
    case (hora >= 6 && hora <= 11):
        console.log('Buenos días');
        break;

    case (hora >= 12 && hora <= 18):
        console.log('Buenas tardes');
        break;
    
    case (hora >= 19 && hora <= 23):
        console.log('Buenas noches');
        break;

    case (hora >= 0 && hora <= 5):
        console.log('Déjame dormir');
        break;
    
    default:
        console.log('Esa no es una hora >:(');
    
} */