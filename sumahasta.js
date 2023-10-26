let coleccion = [5, 7, 10, 13, 2, 1, 1, 3];
let suma = 0;
let fin = false;
let i = 0;

do {
    if (coleccion[i] !== 1) {
        suma += coleccion[i];
    } else fin = true;
    i++;
} while (!fin);

// do {
//     suma += coleccion[i];
//     i++;
// } while (coleccion[i] != 1);

while (coleccion[i] != 1) {
    suma += coleccion[i];
    i++;
}


console.log(suma);
