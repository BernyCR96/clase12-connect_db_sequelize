const prompt = require('prompt-sync')();
let accion = "";

let numero = prompt('Introduce un número: ');
let index = 0;
while(index <= numero){
    console.log(index);
    index = index + 1;
}


while(accion !== "exit") {
    // prompt para elegir acción:
    accion = prompt('Elige una opción (crear/login/exit): ');
    if (accion === "crear") {
        console.log("Creando usuario...");
       
    } else if (accion === "login") {
        console.log("Iniciando sesión...");
       
    } else if (accion === "exit") {
        console.log("Saliendo...");
    } else {
        console.log("Opción no válida. Por favor, elige 'crear', 'login' o 'exit'.");
    }
}

