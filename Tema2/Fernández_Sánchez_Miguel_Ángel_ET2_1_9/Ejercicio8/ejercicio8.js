// Checkea si todos los valores son números y en caso de que sean numeros multiplica todo el array por dos y comprueba que todos los numeros son pares

function procesarArray(arrayCheck) {
    if (arrayCheck.every(num => typeof num == 'number')) {
        arrayCheck = arrayCheck.map(num => num * 2);

        if (arrayCheck.every(num => num % 2 == 0)) {
            alert('Exito, los numeros son pares')
        } else {
            alert('Error,error hay algun numero impar')
        }
    } else {
        alert('Error, hay alguna elemento del array que no es un numero')
    }
}


array = [10, 2, 30, 40, 50]

procesarArray(array)