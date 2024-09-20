// function ordenarEnteros(num1,num2){
//     if(num1>num2){
//         return 1
//     }if(num1==num2){
//         return 0
//     }if(num1<num2){
//         return -1
//     }
// }

// let a3 = [20,6,100,51,28,9];
// a3.sort(ordenarEnteros)
// console.log(a3)

class Persona {
    constructor (nombre,edad){
        this.nombre = nombre;
        this.edad = edad
    }

    toString(){
        return this.nombre+this.edad;
    }
}

let personas = [new Persona('Marcos',33),
    new Persona('Maria',19),
    new Persona('Santiago',28),
    new Persona('Cristina',40)
];

function ordenarEdad  (p1,p2) { return p1.edad>p2.edad?1:p1.edad==p2.edad?0:-1};

personas.sort(ordenarEdad);

console.log(personas)
