function crearMazo() {
    let palos = ['Corazones', 'Picas', 'Treboles', 'Diamante'];
    let valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jota', 'Reina', 'Rey'];

    let mazoCartas = [];

    for (let i = 0; i < palos.length; i++) {
        for (let f = 0; f < valores.length; f++) {
            mazoCartas.push([palos[i], valores[f]])
        }
    }
    return mazoCartas
}

function turnoJugador(mazoDeCartas) {

    let sumaJugador = 0
    let seguir = true

    do {
        let numAleatorio = parseInt(Math.random() * mazoDeCartas.length);

        console.log('Tu carta es: ' + mazoDeCartas[numAleatorio][1] + ' de ' + mazoDeCartas[numAleatorio][0])
        if (typeof mazoDeCartas[numAleatorio][1] == 'string') {
            sumaJugador += 10;
        } else {
            sumaJugador += mazoDeCartas[numAleatorio][1];
        }

        if (sumaJugador > 21) {
            alert('Has perdido te has pasado de 21')
            seguir = false
        } else {
            seguir = confirm('Desea coguer otra carta');
        }
        mazoDeCartas.splice(numAleatorio, 1)
    } while (seguir);
    console.log('Tus cartas suman ' + sumaJugador)
    return sumaJugador;
}

function turnoMaquina(mazoDeCartas, numJugador) {
    let sumaMaquina = 0;
    let seguir = true;

    do {
        let numAleatorioMaquina = parseInt(Math.random() * mazoDeCartas.length);

        if (typeof mazoDeCartas[numAleatorioMaquina][1] == 'string') {
            sumaMaquina += 10;
        } else {
            sumaMaquina += mazoDeCartas[numAleatorioMaquina][1];
        }


        if (sumaMaquina > numJugador && sumaMaquina <= 21) {
            alert('Has perdido, la maquina gana')
            seguir = false;
        } else if (sumaMaquina > 21) {
            alert('Jugador gana, la maquina se ha paso de 21')
            seguir = false;
        }
        mazocartas.splice(numAleatorioMaquina, 1)
    } while (seguir);

    console.log('Suma de las cartas de la maquina ' + sumaMaquina)
}


let mazocartas = crearMazo();
let sumaJugador = turnoJugador(mazocartas);

if (sumaJugador <= 21) {
    turnoMaquina(mazocartas, sumaJugador)
}