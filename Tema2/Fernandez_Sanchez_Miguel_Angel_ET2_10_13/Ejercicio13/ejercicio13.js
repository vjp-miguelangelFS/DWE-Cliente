// Filtro las variables pasadas por parametro para conseguir un array con los números que se repiten y otro array con los números repetidos eliminados
// con el array de los números repetidos lo que hago es mostrarlos por consola y con el array con los números repetidos eliminados los devuelvo por si quisiera utilizarlo.

function eliminarRepetidos(...arrayRepedtidos) {
    let repetidos = arrayRepedtidos.filter((rep, i) => arrayRepedtidos.indexOf(rep) !== i)
    arrayRepedtidos = arrayRepedtidos.filter((rep, i) => arrayRepedtidos.indexOf(rep) === i)

    console.log('Los números repetidos son: ')
    for (let i = 0; i < repetidos.length; i++) {
        console.log(repetidos[i])

    }
    return arrayRepedtidos
}

eliminarRepetidos(1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 10, 15, 30, 15)