// Comprueba si todas las variable pasadas por parametro son String y
// en caso de que todas sean String suma su longuitud y el resultado lo muestra por pantalla.

// En caso de que alguna variable no se un String mostrar un alert con un error.

function sumarLonguitudCadenas(...arrayCadenas) {
    if (arrayCadenas.every(cad => typeof cad == 'string')) {
        document.write('La suma total de la longuitud de las cadenas es: ' + arrayCadenas.reduce((sumaCad, cad) => sumaCad + cad.length, 0))
    } else {
        alert('Error, hay alguna variable que no es un String')
    }
}

sumarLonguitudCadenas('12345', '6789')