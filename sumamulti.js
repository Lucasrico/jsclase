let multi = [[1, 2, 3, 4], [5, 6, 7, 8]]
let suma = 0;
for (let i = 0; i < multi.length; i++) {
    for (let j = 0; j < multi[i].length; j++) {
        suma += multi[i][j];
    }
}
console.log(suma);



// Para este tamaño en concreto:

// let multi = [[1, 2, 3, 4], [5, 6, 7, 8]]
// let suma = 0;
// for (let i = 0; i < 2; i++) {
//     for (let j = 0; j < 4; j++) {
//         suma += multi[i][j];
//     }
// }
// console.log(suma);


