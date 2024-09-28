// Crear un mapa y añade 4 alumnos con sus respectivas notas

let mapaEstudiante = new Map();

mapaEstudiante.set('Pedro', [8, 8, 8, 6, 6, 6]);
mapaEstudiante.set('Ana', [6, 5, 8, 6, 8, 3]);
mapaEstudiante.set('Miguel', [7, 6, 8, 8, 7, 9]);
mapaEstudiante.set('Antonio', [7, 6, 6, 6, 7, 7]);

// 1- Paso el array de notas del mapa a una función que calcula la media y
// mediante un for muestro el nombre y su respectiva nota media de los estudiantes
function mediaAritmentica(...array) {
    let notas = array[0].reduce((total, num) => total + num, 0)
    return notas / array[0].length
}

for (let [nombreEstudiante, arrayNotas] of mapaEstudiante) {
    console.log(nombreEstudiante + ' tiene una media de: ' + mediaAritmentica(arrayNotas))

}
// 2- Creo 2 variables para almacenar la nota media más alta y el nombre del alumno con la noma media más alta
// y voy remplazando el nombre y la nota mediate un if y lo muestro por consola.
let mejorMedia = 0;
let nombreMejorNota;

for (let [nombreEstudiante, arrayNotas] of mapaEstudiante) {
    if (mediaAritmentica(arrayNotas) > mejorMedia) {
        mejorMedia = mediaAritmentica(arrayNotas)
        nombreMejorNota = nombreEstudiante;
    }
}

console.log('La mejor nota media es de ' + nombreMejorNota + ' con un ' + mejorMedia + ' de nota')

// 3- Primero introduzco el nombre y la nota media en un array, despues ordeno el array de mayor a menor con sort y la función que he creodo para ordenar con la nota media
// y una vez ordenado el array muestro por pantalla los nombre de los estudiantes ordenados.
let arrayOrdenado = [];
for (let [nombreEstudiante, arrayNotas] of mapaEstudiante) {
    arrayOrdenado.push([nombreEstudiante, mediaAritmentica(arrayNotas)])
}

function ordenarMedia(est1, est2) {
    if (est1[1] > est2[1]) {
        return -1
    } else {
        if (est1[1] < est2[1]) {
            return 1
        } else {
            return 0
        }
    }
}
arrayOrdenado.sort(ordenarMedia)
console.log('Array Ordenado: ')
for (let i = 0; i < arrayOrdenado.length; i++) {
    console.log((i + 1) + 'º ' + arrayOrdenado[i][0] + ' (' + arrayOrdenado[i][1] + ')')
}