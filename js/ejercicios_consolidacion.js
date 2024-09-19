// // 1

// let num1 = parseInt(prompt('Introduce el primer numero: '));
// let num2 = parseInt(prompt('Introduce el segundo numero: '));
// let num3 = parseInt(prompt('Introduce el tercero numero: '));

// if(num1+ +num2+ +num3 == 100){
//     alert('Exito')
// }else{
//     alert('Fracaso')
// }

// // 2

// setTimeout(() => {
//     alert('Hola')
// }, 3000);

// // 3

// let nombre = prompt('Introduce tu nombre de usuario')

// setTimeout(() => {
//     alert(nombre)
// }, 3000);

// 4

function infoCadenaCaracteres (cadena){
    document.write('La cadena tiene '+cadena.length+' caracteres <br>')
    document.write('La cadena tiene '+cadena.match(/[aeiou]/g).length+' vocales <br>')
    document.write('¿La cadena empieza por a?: ')
    document.write(cadena.startsWith('a')?'Si':'No');
}

infoCadenaCaracteres('antonio')