let matriz = new Array(10);
let colores = ['red','blue','green','yellow'];
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
}

document.addEventListener("DOMContentLoaded",function (){
    for (let i = 0; i < boton.length; i++) {
    
        boton[i].addEventListener('click',(evento) =>{
            if(evento.button == 0){
                boton[i].style.backgroundColor = 'red'
            }
        })
    }
});