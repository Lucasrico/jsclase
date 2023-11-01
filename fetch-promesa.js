// Esta es nuestra funcion ok (then) de la promesa:

function mostrar(respuesta) {
    console.log(respuesta);
}

//Esta es nuestra funcion error (catch) de la promesa.

function fallo(error) {
    console.log(error)
}

function buscarMayor(respuesta) {
    mayores = []; // alto, ancho
    let mayor = 0;
    for (let i = 0; i < respuesta.length; i++) {
        if (respuesta[i].height > mayor) {
            mayor = respuesta[i].height;
            mayores[0] = respuesta[i].height;
        }
        if (respuesta[i].width > mayor) {
            mayor = respuesta[i].width;
            mayores[1] = respuesta[i].width;
        }
    }

    return console.log(mayores);
}

let promesa = fetch("https://api.thecatapi.com/v1/images/search?limit=10");

promesa.then((response) => response.json()).then(buscarMayor).catch(fallo);