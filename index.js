const prompt = require('prompt-sync')();
const sequelize = require('./config/database');
const { createUser, login } = require('./services/authServices');

async function main() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        let accion = "";
        while(accion !== "exit"){
            // prompt para elegir acción:
            action = prompt('Elige una opción (crear/login/exit): ');
            if( action === "crear"){
                console.log("Creando usuario...");
                const username = prompt('Introduce el nombre de usuario: ');
                const password = prompt('Introduce la contraseña: ');
                const email = prompt('Introduce el correo electrónico: ');
                const crearUsuario = await createUser(username, password, email);
                console.log("Usuario creado:", crearUsuario.toJSON());
            }
            if( action === "login"){
                console.log("Iniciando sesión...");
                const username = prompt('Introduce el nombre de usuario: ');
                const password = prompt('Introduce la contraseña: ');
                const getUser = await login(username, password);
                if (getUser) {
                    console.log("Usuario encontrado:", getUser.toJSON());
                } else {
                    console.log("Usuario no encontrado o contraseña incorrecta.");
                }
            }
            else if (action === "exit") {
                console.log("Saliendo...");
                accion = "exit";
            } else {
                console.log("Opción no válida. Por favor, elige 'crear', 'login' o 'exit'.");
            }
        }
        
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();