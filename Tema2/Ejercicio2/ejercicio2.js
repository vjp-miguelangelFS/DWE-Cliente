// Compara dos cadenas y te dice si la primera cadena y la segunda cadena invertida son iguales
function compararCadenasIguales(cad1, cad2) {
    if (typeof cad1 != 'string' || typeof cad2 != 'string') {
        console.log('Error, una de las dos cadenas no es una cadena de caracteres')
    } else {
        let cadenaSeparar = cad2.split('');
        let invertirCadena = cadenaSeparar.reverse();
        let cad1Reversa = invertirCadena.join('');

        if (cad1 == cad1Reversa) {
            console.log('Las cadenas son iguales')
        } else {
            console.log('Las cadenas no son iguales')
        }
    }
}
compararCadenasIguales('hola', 'aloh');
compararCadenasIguales('adios', 'soida');
compararCadenasIguales('Miguel', 'leugiM');

