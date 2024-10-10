let matriz = new Array(10);
let colores = ['red', 'blue', 'green', 'yellow'];
for (let i = 0; i < matriz.length; i++) {
    matriz[i] = new Array(10)
}

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        matriz[i][j] = '<button></button>'
    }
}

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        document.write(matriz[i][j])
    }
    document.write('<br>')
}

let boton = document.getElementsByTagName('button')


for (let i = 0; i < boton.length; i++) {

    boton[i].style.height = '25px'
    boton[i].style.width = '25px'
    boton[i].style.margin = '2px'
    boton[i].style.backgroundColor = '#f0f0f0'
    boton[i].style.border = '1px solid grey'

}

document.addEventListener("DOMContentLoaded", function () {


    for (let i = 0; i < boton.length; i++) {
        let numColor = 0;
        boton[i].addEventListener('mouseup', (evento) => {
            if (numColor == -1) {
                numColor = 3;
            } else if (numColor == 4) {
                numColor = 0
            }

            switch (evento.button) {
                case 0:
                    boton[i].style.backgroundColor = colores[numColor]
                    numColor++;
                    break;
                case 1:
                    boton[i].style.backgroundColor = '#f0f0f0'
                    break;
                case 2:
                    boton[i].style.backgroundColor = colores[numColor]
                    numColor--;
                    break;
                default:
                    break;
            }
            console.log(numColor)
        })
    }
});