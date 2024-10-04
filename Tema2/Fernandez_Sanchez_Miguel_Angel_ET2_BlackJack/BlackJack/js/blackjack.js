// Creo el mazo con dos arrays, el primero contiene los palos de la baraja y el segundo contiene los valores.
//Con dos for creo la baraja y la retorno en un array de dos dimensiones.
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

// Calculo la suma de las cartas del jugador y las retorno, en caso de que el valor sea una figura (Jota, Reina y Rey) les doy valor 10
function calcularValorMano(manoDeCartas) {

    let sumaCartas = 0

    for (let i = 0; i < manoDeCartas.length; i++) {

        if (typeof manoDeCartas[i][1] == 'string') {
            sumaCartas += 10
        } else {
            sumaCartas += manoDeCartas[i][1]
        }
    }
    return sumaCartas
}

// El turno del jugador va generando números aleatoria para escoger una carta de la baraja y lo guarda en un array y elimina la carta que ha salido de la baraja.
// Para retornar la suma de la mano del jugador llamo a la primera función y le paso el array con la mano del jugador 
function turnoJugador(mazoDeCartas) {

    let manoJugador = []
    console.log('--------------------------------------------')
    do {
        let numAleatorio = parseInt(Math.random() * mazoDeCartas.length);

        console.log('Tu carta es: ' + mazoDeCartas[numAleatorio][1] + ' de ' + mazoDeCartas[numAleatorio][0])

        manoJugador.push(mazoDeCartas[numAleatorio])

        mazoDeCartas.splice(numAleatorio, 1)
    } while (confirm('¿Desea coger otra carta?'));

    return calcularValorMano(manoJugador);
}


// El turno de la maquina es parecido al turno de jugador solo que se hace automaticamente y va almacenando la suma de sus cartas en la misma función,
// en caso de que la suma de las carta de la maquina sea mayor al las del jugador y las cartas de la maquina no se pasen de 21 mostrara un mensaje informando que el jugador ha perdido,
// y si la suma de la maquina supera 21 mostrara un mensaje informando que el judador gana
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
        mazoDeCartas.splice(numAleatorioMaquina, 1)
    } while (seguir);

    console.log('Suma de las cartas de la maquina son ' + sumaMaquina)
}

// Creo el mazo llamando a la funcion crearMazo y consigo la suma de las mano del jugador,
// en caso de que ma mano del jugador pase de 21 mostrara un mensaje y el turno de la maquina no ocurrira, pero si la mono del jugador da menos de 21 se lleva a cabo
// el turno del jugador y muestra por consola la suma de las manos del jugador y de la maquina.
function blackJack() {
    let mazoCartas = crearMazo();
    let jugadorSuma = turnoJugador(mazoCartas)

    if (jugadorSuma > 21) {
        alert('Has perdido te has pasodo de 21')
    } else {
        console.log('--------------------------------------------')
        turnoMaquina(mazoCartas, jugadorSuma)
        console.log('La suma de tus cartas son ' + jugadorSuma)
    }
}

// Este doWhile sirve para que puedas empezar otra partida si lo deseas
do {
    blackJack()
} while (confirm('¿Deseas jugar otra partida?'));

