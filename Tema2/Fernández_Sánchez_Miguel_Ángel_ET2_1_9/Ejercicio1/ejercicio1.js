// Compara dos cadenas y dice cual de las dos es la más corta
function compararCadenas(cad1, cad2) {

    if (typeof cad1 != 'string' || typeof cad2 != 'string') {
        console.log('Error, una de las dos cadenas no es una cadena de caracteres')
    } else {
        if (cad1.length < cad2.length) {
            console.log('La cadena ' + cad1 + ' es la más corta')
        } else {
            console.log('La cadena ' + cad2 + ' es la más corta')
        }
    }
}

compararCadenas('Hola me llamo miguel', 124)