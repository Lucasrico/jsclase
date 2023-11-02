let ord = [];




const mysql = require('mysql2');
//crear conexion a base de datos polodigital en mysql
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'maria0709',
    database: 'polo_digital',
});

//conectarse al servidor mysql local
connection.connect((error) => {
    if (error) {
        return console.error(`error: ${error.message}`);
    }
    console.log("Conectado a MySQL!!");
});

//Hacemos una consulta
connection.query("select * from usuarios", (error, result, fields) => {
    if (error) {
        return console.error(`error: ${error.message}`)
    }
    //   console.log(result);

    // Ordenar el array "result" por orden alfabetico del nombre.
    // Bubble sort
    for (let j = 0; j < result.length; j++) {
        for (let i = 0; i < result.length - 1; i++) {
            if (result[i].nombre > result[i + 1].nombre) {
                let aux = result[i];
                result[i] = result[i + 1];
                result[i + 1] = aux;
            }
        }
    }
    console.log(result);
    //ordenar por apellido a la inversa:
    for (let j = 0; j < result.length; j++) {
        for (let i = 0; i < result.length - 1; i++) {
            if (result[i].apellidos < result[i + 1].apellidos) {
                let aux = result[i];
                result[i] = result[i + 1];
                result[i + 1] = aux;
            }
        }
    }
    console.log(result);

});

//Cerrar conexion
connection.end((error) => {
    if (error) {
        return console.error(`error: ${error.message}`);
    }
    console.log("Desconectado a MySQL!!");
});
