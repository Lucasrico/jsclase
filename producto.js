let coleccion = [5, 7, 10, 13, 2, 1, 1, 3];


let producto = 1;
for (let i = 0; i < coleccion.length; i++) {
    //  producto = producto * coleccion[i];
    producto *= coleccion[i];
}

console.log(producto);
console.log(5 * 7 * 10 * 13 * 2 * 1 * 1 * 3);