let listado = [1, 5, 12, 8, 7, 23, 8, 2];

function esMayor(a, b) {
    return a > b;
}

function esMenor(a, b) {
    return a < b;
}

function procesar(listado, callback) {
    let ultimo = listado[0];
    for (let i = 1; i < listado.length; i++) {
        if (callback(listado[i], ultimo)) {
            ultimo = listado[i];
        }
    } return ultimo;
}

// muestra el mayor
console.log(procesar(listado, esMayor));
// muestra el menor
console.log(procesar(listado, esMenor));