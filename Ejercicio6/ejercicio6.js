arrayModificar = [10, 20, 30, 40];
console.log(arrayModificar.join('#'))

// 1 Añade dos elemtos al principio
arrayModificar.unshift(1, 2);
console.log(arrayModificar.join('#'))

// 2 Añade 3 elemntos al final
arrayModificar.push(42, 43, 44)
console.log(arrayModificar.join('#'))

// 3 Elimina las posiciones 3,4,5
arrayModificar.splice(3, 3)
console.log(arrayModificar.join('#'))

// 4 Añade 2 elemento antes del ultimo elemto
arrayModificar.splice(5, 0, 45, 46)
console.log(arrayModificar.join('#'))  