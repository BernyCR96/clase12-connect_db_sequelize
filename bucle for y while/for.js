const prompt = require('prompt-sync')();

let numero = prompt('Introduce un número: ');

for (let index = 0; index <= numero; index++) {
    console.log(index);    
}