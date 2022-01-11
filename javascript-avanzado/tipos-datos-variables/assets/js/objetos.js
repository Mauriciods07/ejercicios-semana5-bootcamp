let persona = {
    // pares de clave: valor
    nombre: {
        apellidoPaterno: 'Jesus',
        apellidoMaterno: 'Leon',
        primerNombre: 'Carlos Eduardo'
    },
    edad: 31,
    direccion: {
        ciudad: 'Villahermosa',
        estado: 'Tabasco',
    },
    numero: [
        123123232123,
        123123231231
    ],
    sumar: (a, b) => {
        return a + b;
    }
};

console.log(persona.nombre.apellidoMaterno);
console.log(persona.sumar(4,5));

let pokemon = {
    nombre: 'Wartortle',
    niveles: {
        actual: 22,
        evolucion: 36,
    },
    objeto: false,
    habilidad: 'Torrente',
    ataques: {
        ataque1: {
            nombre: 'Pistola de agua',
            tipo: 'agua'
        },
        ataque2: {
            nombre: 'Burbujas',
            tipo: 'agua'
        },
        ataque3: {
            nombre: 'Mordisco',
            tipo: 'siniestro'
        },
        ataque4: {
            nombre: 'Rapid Spin',
            tipo: 'normal'
        },
    },
    estadisticas: {
        hp: 59,
        ataque: 63,
        defensa: 80,
        atq_esp: 65,
        def_esp: 80,
        velocidad: 58,
    },
    debilidades: ['planta', 'electrico'],
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png'
}

let stock = [{
    hola: 'hola',
    mundo: 'mundo'
}]

console.log(stock[0].hola);