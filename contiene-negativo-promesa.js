/**
 * Usando una promesa comprobar si todos los numeros de una lista son positivos, en tal caso 
 * llamar a resolve, si el array contiene algun numero negativo debe llamar a la funcion reject.
 * 
 * La funcion resolve debe mostrar el array por consola.
 * La funcion reject debe mostrar el numero negativo encontrado.
 * 
 * Ejemplo 1: para el array [1, 2, 3] debe llamar a resolve y mostrar consola [1, 2, 3]
 * Ejemplo 2: para el array [1, 2, -1] debe llamar a reject y mostrar por consola -1
 */

const listado = [8, 4, 9, 12, 32, 9, 58, 14];
const listadoConNegativo = [8, 4, 9, 12, 32, 9, 58, -14,];

function ok(array) {
    console.log(array);
}

function nook(valornegativo) {
    console.log(valornegativo)
}

function comprobarNegativo(listado) {
    let p = new Promise(function (resolve, reject) {
        let haynegativo = false;
        let valornegativo = 0;
        for (let i = 0; i < listado.length; i++) {
            if (listado[i] < 0) {
                haynegativo = true;
                valornegativo = listado[i];
            }
        }
        if (!haynegativo) {
            resolve(listado);
        } else {
            reject(valornegativo);
        }

    });

    return p;
}

comprobarNegativo(listado).then(ok).catch(nook);
comprobarNegativo(listadoConNegativo).then(ok).catch(nook);