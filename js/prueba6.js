// let funcionLambda = (arg1,arg2) => {return  arg1 + arg2};

// console.log(funcionLambda(3,2))

// let funcionProcesadoraPar = function (arg1,arg2,funcionProcesadora){
//     return funcionProcesadora(arg1,arg2)
// }

// console.log("Esta vez procesamos una función (3 y 2): " +
//      funcionProcesadoraPar(3,2, (n1,n2) => {return n1+n2} )
// );

// console.log("Esta vez procesamos una función (3 y 2): " +
//     funcionProcesadoraPar(3,2,(n1,n2) => n1*n2)
// );


// Prueba 6.2

let procesaTres = function (arg1,arg2,arg3, funcionProcesadora){
    return funcionProcesadora(arg1,arg2,arg3);
}

console.log("Sumamos los tres numeros (2,5 y 4): " +
    procesaTres(2,5,4,(n1,n2,n3) => {return n1+n2+n3})
)

console.log("Devuelve el mayor los tres numeros (2,5 y 4): " +
    procesaTres(2,5,4,(n1,n2,n3) => {return Math.max(n1,n2,n3)})
)

console.log("Devuelve el menor los tres numeros (2,5 y 4): " +
    procesaTres(2,5,4,(n1,n2,n3) => {return Math.min(n1,n2,n3)})
)

console.log("Devuelve la suma entre el primero y el tercero y los divide entre el segundo (2,5 y 4): " +
    procesaTres(2,5,4,(n1,n2,n3) => {return (n1+n3)/n2})
)