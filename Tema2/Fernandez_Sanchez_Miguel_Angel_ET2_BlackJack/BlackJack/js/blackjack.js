function crearMazo() {
    let palos = ['Corazones', 'Picas', 'Treboles', 'Diamante'];
    let valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jota', 'Reina', 'Rey'];

    let mazoCartas = [];

    for (let i = 0; i < palos.length; i++) {
        for (let f = 0; f < valores.length; f++) {
            mazoCartas.push([palos[i], valores[f]])
        }
    }
    console.log(mazoCartas)
}

crearMazo();