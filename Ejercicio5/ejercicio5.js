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