// Comprueba que todos lo numeros del array son pares y muestra un mesaje y si hay algun impar te mostrara un mensaje correspondiente
arrayPares = [10, 20, 30, 40, 50];

par = arrayPares.every(num => num % 2 == 0);

if (par == true) {
    console.log('Todos los numeros del array son pares');
} else {
    console.log('Hay algun numero en el array que no es par');
}