// En esta función filtro primero los parametros que sean números y posteriormente filtro los numeros que son pares y los muestro por pantalla

function agruparNumeros(...array) {

    let arrayNumeros = array.filter(num => typeof num == 'number');

    let arrayNumerosPares = arrayNumeros.filter(num => num % 2 == 0)

    document.write('Estos son los números pares: ')
    for (let i = 0; i < arrayNumerosPares.length; i++) {
        document.write(' ' + arrayNumerosPares[i])
    }
    document.write('<br>')
}
agruparNumeros(10, 20, 33, 'ewqew', true, 40, 'ewqeqw', 51)

agruparNumeros(12, 27, 33, 'hola', true, 40, 'adios', 52, false)