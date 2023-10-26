//Devuelve la suma de todos los elementos de un array

function sumar(listado) {
    let suma = 0;
    for (let i = 0; i < listado.length; i++) {
        suma += listado[i];
    }
    return suma;
}

function multiplicar(listado) {
    let prod = 1;
    for (let i = 0; i < listado.length; i++) {
        prod *= listado[i];
    }
    return prod;
}

let coleccion = [5, 7, 10, 13, 2, 1, 1, 3]

console.log(sumar(coleccion));
console.log(multiplicar(coleccion));
// console.log(5 * 7 * 10 * 13 * 2 * 1 * 1 * 3);