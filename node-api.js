//Creacion de una API que nos devuelva datos de nuestra BBDD
//Instalamos express previamente

let express = require("express");
let app = express();
const mysql = require('mysql2');

const connection = mysql.createConnection({ // Creamos conexion a BBDD
    host: 'localhost',
    user: 'root',
    password: 'maria0709',
    database: 'polo_digital',
});

connection.connect((error) => { // Conectamos a la BBDD (?)(Funciona sin esto?? Si lo quitamos no nos devuelve la confirmacion)
    if (error) {
        return console.error(`error: ${error.message}`);
    }
    console.log("Conectado a MySQL!!");
});

connection.query("select * from usuarios", (error, result, fields) => { // Hacemos el query a la BBDD.
    //Devolvemos el mensaje de error si hay algun error al hacer la query
    if (error) {
        return console.error(`error: ${error.message}`)
    }

    app.listen(8000, function () { // Seleccionamos el puerto 8000 para recibir consultas. Permite hacer el siguiente "get".
        console.log("Server is up and running!");
    });

    app.get("/clientes", function (request, response) { //Devolvemos en /clientes lo que pongamos en response.send() como parametro.
        response.send(result);
    });
});