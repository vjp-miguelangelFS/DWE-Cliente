class platoCocina{
    constructor(nombrePlato,duracionMinutos,dificultad){
        this.nombrePlato = nombrePlato;
        this.duracionMinutos = duracionMinutos;
        this.dificultad = dificultad;
    }
}

let MapaPlatos = new Map();
MapaPlatos.set(new platoCocina('Cocido',60,6),['Garbanzo','Sal','Patatas','Chorizo','Zanahorias']);
MapaPlatos.set(new platoCocina('Tortilla',45,7),['Huevos,Sal','Patatas','Aceite','Cebolla']);
MapaPlatos.set(new platoCocina('Berenjenas',150,7),['Berenjena','Carne','Aceite','Sal','Queso','Pimientos','Tomates','Bechamel']);

console.log(MapaPlatos)