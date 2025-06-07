const prompt = require('prompt-sync')();

async function main() {
    try {

        let accion = "";
        while(accion !== "exit"){
            // prompt para elegir acción:
            action = prompt('Ingrese una expresión:');
            const permisos = ["SUMA", "RESTA", "MULTIPLICA"]; // traer de la base de datos
            let arrayExpresion = action.split(" ");

            //validar si la expresion ingresada en action NO contiene alguno de los valores del array permisos 
            // si ingreso DIVIDE, no me debería de evaluar la expresión
            // no evaluar numeros
            const operadores = arrayExpresion.filter(exp => isNaN(parseInt(exp)));
            const tienePermiso = operadores.every(exp => permisos.includes(exp.toUpperCase()));
            
            if (!tienePermiso) {
                console.log(`Expresión no válida. Solo se permiten las operaciones: ${permisos.join(", ")}`);
                //evaluar expresión:
                continue;
            }

            //GUARDAR EN LA BASE DATOS Y RESTAR AL LIMITE DE OPERACIONES
            
            if (action === "exit") {
                console.log("Saliendo...");
                accion = "exit";
            }
        }
        
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();