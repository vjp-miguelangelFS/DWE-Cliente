document.addEventListener("DOMContentLoaded", main);
function main() {

    document.getElementById("divRojo").addEventListener('click', (evento) => {
        console.log("Pulsaste el botón rojo")
    },true
    );

    document.getElementById("divAzul").addEventListener('click', (evento) => {
        console.log("Pulsaste el botón azul")
        
    }
    );
    document.getElementById("divVerde").addEventListener('click', (evento) => {
        console.log("Pulsaste el botón verde")
        
    },true
);
}