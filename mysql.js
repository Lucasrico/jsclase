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

//Hacemos una consulta: Vamos a hacer un par de reordenaciones en la salida de datos:
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
//Nueva consulta para el ultimo ejercicio de las 20:30, sacar el empleado de la tabla empleados con mayor salario:
connection.query("select * from empleados", (error, result, fields) => {
    let mayor = 0; //vamos a ir guardando el valor mayor cuando encontremos uno ams grande
    let pos = 0; // usaremos pos para guardar la posicion del array del usuario con mayor sueldo
    for (let i = 0; i < result.length; i++) {
        if (result[i].salario > mayor) {
            mayor = result[i].salario;
            pos = i;
        }
    }
    console.log("Toda la tabla:")
    console.log(result)
    console.log("El de mayor salario:")
    console.log(result[pos].salario)
});

//Cerrar conexion
connection.end((error) => {
    if (error) {
        return console.error(`error: ${error.message}`);
    }
    console.log("Desconectado a MySQL!!");
});
