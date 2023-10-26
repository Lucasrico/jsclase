/**
 * Crear una funcion que recibe como parametros un array de numeros y un numero.
 * La funcion tiene que devolver la posicion del numero dentro del array
 * o no existe si numero no esta en el array.
 * 
 * array = [1, 2, 3, 4];
 * 
 * si numero = 2 -> debe devolver 1;
 * si numero 5 -> debe devolver "no existe";
 */

let datos1 = [4, 6, 18, 15, 10];
let datos2 = [4, 10, 5];

// function buscar(array, num) {
//     let pos;
//     let existe = false;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] == num) {
//             pos = i;
//             existe = true;
//             break;
//         }
//     }
//     if (existe) {
//         return pos;
//     } else {
//         return "no existe";
//     }
// }

function buscar(array, num) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == num) {
            return i;
        }
    }
    return "no existe";
}

function superBuscar(arraydonde, arraycual) {
    let resultados = [];
    for (let i = 0; i < arraycual.length; i++) {
        resultados[i] = buscar(arraydonde, arraycual[i])
    }
    return resultados;
}

console.log(superBuscar(datos1, datos2));