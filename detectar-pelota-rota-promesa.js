/**
 * En un partido de tenis, cada juego de pelotas dura un maximo de 5 jugadas.
 * 
 * Dada una secuencia de jugasdas donde se indica la pelota que se ha usado, nuestro codigo debe 
 * indicar si alguna pelota ha ya no es validad o si todas las pelotas son validas.
 * 
 * Por ejemplo: dada la secuencia de jugadas siguiente con el numero de pelota usada s = [
 * 1, 1, 1, 2, 1, 1] nuestro codigo de la promesa debe llamar a reject con el numero de pelota 1
 * 
 * Otro ejemplo: dada la secuencia de jugadas sigueinte con el numero de pelota usada s = [
 * 1, 2, 3, 4, 1, 2] nuestro codigo de la promesa debe llamar a resolve con el mensaje "Pelotas ok"
 */

const jugadasUno = [1, 1, 2, 3, 4, 1, 1, 2, 2, 3, 3, 4, 4, 1, 1, 2];
const jugadasDos = [1, 3, 2, 3, 4, 1, 1, 2, 2, 3, 3, 4, 4, 1, 4, 2];

function comprobarPelotas(jugadas) {
    let p = new Promise(function (resolve, reject) {
        let apar = [];
        for (let i = 0; i < jugadas.length; i++) {
            if (apar[jugadas[i]] == undefined) {
                apar[jugadas[i]] = 1;
            } else {
                apar[jugadas[i]]++;
            }
        }
        for (let i = 0; i < apar.length; i++) {
            if (apar[i] > 4) {
                reject(i);
            }
        }
        resolve(apar);
    });
    return p;
}

function nook(pelota) {
    console.log("no ok " + pelota);
}

function ok() {
    console.log("pelotas ok");
}

comprobarPelotas(jugadasUno).then(ok).catch(nook);
comprobarPelotas(jugadasDos).then(ok).catch(nook);