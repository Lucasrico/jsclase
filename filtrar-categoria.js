//Recibe un listado de productos y una categoria, devuelve
// array con los prodcutos que son de esa categoria.

//Usando push:
function filtrarPorCategoria(array, categoria) {
    salida = [];
    for (let i = 0; i < array.length; i++) {
        if (categoria == array[i].categoria) {
            salida.push(array[i].nombre);
        }

    }
    return salida;
}
//Sin usar push, con un contador:
function filtrarPorCategoria(array, categoria) {
    salida = [];
    pos = 0;
    for (let i = 0; i < array.length; i++) {
        if (categoria == array[i].categoria) {
            salida[pos] = (array[i].nombre);
            pos++
        }
    }
    return salida;
}
//Sin usar push, con length
function filtrarPorCategoria(array, categoria) {
    salida = [];
    for (let i = 0; i < array.length; i++) {
        if (categoria == array[i].categoria) {
            salida[salida.length] = (array[i].nombre);
        }
    }
    return salida;
}

//Salidas
console.log(buscarMasCaro(productos));
console.log(buscarMasCaro2(productos));
console.log(filtrarPorCategoria(productos, "videojuegos"));