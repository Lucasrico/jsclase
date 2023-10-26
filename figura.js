function figura(alto, char) {
    let s = "";
    for (let i = 0; i <= alto; i++) {
        for (let j = 1; j <= i; j++) {
            s = s + char;
        }
        s = s + "\n";
    }
    return s;
}

function piramide(alto, char) {
    let s = "";
    for (let i = 0; i <= alto; i++) {
        for (let j = 0; j <= alto - i; j++) {
            s = s + char;
        }
        s = s + "\n";
    }
    return s;
}

function completa(h) {
    // Tengamos en cuenta que la base es el doble que la altura.
    //CHECK Puede haber error de enteros

    //Es como la funcion de pintar cuadrado, pero
    //En cada fila del cuadrado 
    let s = "";
    for (let i = 0; i <= h; i++) { // "<="" pasa a "<" para la centrada
        for (let j = 0; j < h; j++) { // y "h" pasa a "2*h"
            if (j < h - i || j > h + i) {
                s += " ";
            } else s += "**"; //"**" pasa a "*" para la centrada
        }
        s += "\n";
    } return s;


}

function centrada(h) {
    let s = "";
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < 2 * h; j++) {
            if (j < h - i || j > h + i) {
                s += " ";
            } else s += "*";
        }
        s += "\n";
    } return s;


}

console.log(centrada(8));