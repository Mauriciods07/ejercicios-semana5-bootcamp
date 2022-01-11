let changeBtn = document.getElementById('change-btn');
let title = document.getElementById('title');

function changeName() {
    let changeLabel = document.getElementById('name-label');
    changeLabel.innerHTML = '<label for="name">Nombre:</label><input id="name" type="text" name="name" placeholder="Nombre"><button id="change-btn" onclick="changeTitle();">Cambiar nombre</button>';
}

function changeTitle() {
    let name = document.getElementById('name').value;
    console.log(name);
    title.textContent = `Hola, ${name}`;
}

/* function changeName() {
    let name = prompt("Nombre: ");
    title.textContent = `Hola, ${name}`;
} */