// Muestra la cantidad de tipo de variales tiene el array que le pasas a la función

function cantidadDeTiposElementos(...arrayElementos) {
    let contadorString = 0;
    let contadorNumber = 0;
    let contadorOtro = 0;

    for (let i = 0; i < arrayElementos.length; i++) {
        if (typeof arrayElementos[i] == 'string') {
            contadorString++;
        } else {
            if (typeof arrayElementos[i] == 'number') {
                contadorNumber++;
            } else {
                contadorOtro++;
            }
        }
    }
    document.write('Hay ' + contadorString + ' strings<br>')
    document.write('Hay ' + contadorNumber + ' number<br>')
    document.write('Hay ' + contadorOtro + ' que no son ni string ni number<br>')
}

arrayTiposElemntos = [1, 'eqw', true, 2, 7, 1, 'ewq', 1]

cantidadDeTiposElementos(...arrayTiposElemntos)

document.write('<br>')

arrayTiposElemntos2 = [6, 'eqw', true, 'ewq', 7, false, 'ewq', 1]

cantidadDeTiposElementos(...arrayTiposElemntos2)
