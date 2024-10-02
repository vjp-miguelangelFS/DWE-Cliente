// console.log( document.documentElement) // Devuelve el elemento raiz de document
// console.log( document.head) // Devuelve el elemento <head>
// console.log( document.body) // Devuelve el elemento <body>
// console.log( document.getElementById("titulo1")) // Devuelve el elemnto por su id
// console.log( document.getElementsByClassName("parrafos")) // Devuelve un objeto similar a un array de un elemnto por su nombre de clase
// console.log( document.getElementsByName("a")) // Devuelve el un NodeList por el name del enlace

let head = document.head;

console.log(head.childNodes) // Devulve una colección de hijos del elemento
console.log(head.children) // Obtiene la lista de elementos de body
console.log(head.parentNode) // Devuleve el padre del nodo especificado
console.log(head.nextSibling) // Devulve el siguiente nodo con respecto a la lista de nodos coseguida con childNodes
console.log(document.getElementById("titulo1").previousSibling) // Devuelve el nodo anterior al especificado a la lista de nodos (childNodes)
console.log(head.nextElementSibling) // Devuelve el elemento posterior al especificado, dentro de la lista de elementos hijos de su padre en caso de que el elemento sea el ultimo de la lista devuelve null
console.log(document.getElementById("titulo2").previousElementSibling) // Devuelve el elemento predecesor inmediato al especificado dentro de la lista de hijos de su padre y en caso de que sea el primero devolvera null

let elemnto1 = document.createElement('h2') // Creas un elemento con la etique que tu introduzcas
console.log(elemnto1)

let elemento2 = document.createTextNode('Hola me llamo Miguel') // Creas un nodo de texto
console.log(elemento2)

elemnto1.appendChild(elemento2) // Con appendChild fusionas el elemento y el nodo de texto

// 1
let elementosP = document.getElementsByTagName('p')
// 2
for(let item of elementosP) {
    console.log(item.innerHTML)
}
// 3
let elemtoBorrar = document.getElementsByClassName('parrafos')

for(let item of elemtoBorrar){
    item.remove();
}
// 4
for(let item of elementosP) {
    console.log(item.innerHTML)
}


