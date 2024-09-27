// Crea una cadena de caracteres que te muestra los dos predefinidos o los datos que les pases por paramentro

function convertirEntradas(producto = 'Producto generico', precio = 100, impuestos = 21) {

    if (typeof producto == 'string' && typeof precio == 'number' && typeof impuestos == 'number') {
        console.log('El producto es ' + producto + ' el precio es ' + precio + ' y su impuesto es ' + impuestos)
    } else {
        console.log('El producto es producto generico el precio es 100 y su impuesto es 21')
    }
}

convertirEntradas('Leche', 120, 300);
convertirEntradas('Azucar', 120);
convertirEntradas(1, 'ewqsdawsd', 'Sal');