class platoCocina{
    constructor(nombrePlato,duracionMinutos,dificultad){
        this.nombrePlato = nombrePlato;
        this.duracionMinutos = duracionMinutos;
        this.dificultad = dificultad;
    }
    toString(){
        console.log('El plato '+this.nombrePlato+' tiene una duración de '+this.duracionMinutos+' minutos con dificultad '+this.dificultad)
    }
}

let MapaPlatos = new Map();
let plato1 = new platoCocina('Cocido',60,6);
let plato2 = new platoCocina('Tortilla',45,7);
let plato3 = new platoCocina('Berenjenas',150,7);

MapaPlatos.set(plato1,['Garbanzo','Sal','Patatas','Chorizo','Zanahorias']);
MapaPlatos.set(palto2,['Huevos,Sal','Patatas','Aceite','Cebolla']);
MapaPlatos.set(plato3,['Berenjena','Carne','Aceite','Sal','Queso','Pimientos','Tomates','Bechamel']);
