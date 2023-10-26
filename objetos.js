const productos = [
    {
        nombre: "bicicleta",
        stock: 2,
        categoria: "deporte",
        precio: 1000,
        valoracion: 4.8
    },
    {
        nombre: "xbox",
        stock: 20,
        categoria: "videojuegos",
        precio: 350,
        valoracion: 4.0
    },
    {
        nombre: "ps5",
        stock: 1,
        categoria: "videojuegos",
        precio: 499,
        valoracion: 4.8
    }
]
function mediaProductos(array) {
    let suma = 0;
    for (let i = 0; i < productos.length; i++) {
        suma += productos[i].valoracion;
    }
    return suma / productos.length;
}
//Devolver el nombre y stock del mas caro
function buscarMasCaro(array) {
    let mayorprecio = 0;
    let pos = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i].precio > mayorprecio) {
            mayorprecio = array[i].precio;
            pos = i;
        }
    }
    return [array[pos].nombre, array[pos].stock];
}
function buscarMasCaro2(array) { //devuelve [nombre,stock]
    let salida = [0, 0]; // No funciona con salida = [] ???
    for (i = 0; i < array.length; i++) {
        if (array[i].precio > salida[0]) {
            salida = [array[i].nombre, array[i].stock]
        }
    }
    return salida;
}
//Recibe un listado de productos y una categoria, devuelv e array con los prodcutos que son de esa categoria.

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