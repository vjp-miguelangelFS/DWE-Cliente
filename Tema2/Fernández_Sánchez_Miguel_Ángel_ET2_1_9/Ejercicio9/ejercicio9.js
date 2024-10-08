// Creao una clase para crear objetos y posteriormente los introduzco en un mapa para mostrarlo por pantalla mediante dos for y utilizando el toString de la clase platoCocina

class platoCocina {
    constructor(nombrePlato, duracionMinutos, dificultad) {
        this.nombrePlato = nombrePlato;
        this.duracionMinutos = duracionMinutos;
        this.dificultad = dificultad;
    }
    toString() {
        return 'El plato ' + this.nombrePlato + ' tiene una duración de ' + this.duracionMinutos + ' minutos con dificultad ' + this.dificultad
    }
}

let MapaPlatos = new Map();

MapaPlatos.set(new platoCocina('Cocido', 60, 6), ['Garbanzo', 'Sal', 'Patatas', 'Chorizo', 'Zanahorias']);
MapaPlatos.set(new platoCocina('Tortilla', 45, 7), ['Huevos', 'Sal', 'Patatas', 'Aceite', 'Cebolla']);
MapaPlatos.set(new platoCocina('Berenjenas', 150, 7), ['Berenjena', 'Carne', 'Aceite', 'Sal', 'Queso', 'Pimientos', 'Tomates', 'Bechamel']);

for (let [persona, arrayIngredientes] of MapaPlatos) {
    console.log(persona.toString())
    for (let i = 0; i < arrayIngredientes.length; i++) {
        console.log('Ingrediente ' + (i + 1) + ': ' + arrayIngredientes[i])

    }
}
