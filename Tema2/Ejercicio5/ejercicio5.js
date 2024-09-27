// Ordena un array de números con una función que he creado

function ordenarArray(num1, num2) {
    if (num1 > num2) {
        return 1;
    } else {
        if (num1 < num2) {
            return -1;
        } else {
            return 0;
        }
    }
}

let arrayDesOrdenado = [7, 17, 2, 90, 150, 89, 104, 33, 23]


document.write(arrayDesOrdenado.sort(ordenarArray))