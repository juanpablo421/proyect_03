//paquete importado
require('colors');

const { bgRed } = require('colors');
// referencia el modulo math a traves de la constante math
const math = require('./modules/math.js');

console.clear();
//console.log(math);

const main = async() => {
    console.log('****************************************'.bgRed);
    console.log('****'.red,'FUNCIONES MATEMATICAS'.white.bgCyan,
                '*************'.red);
    console.log('****************************************\n'.bgRed);
    console.log('****************************************'.bgBlue);
    console.log('****************************************'.bgMagenta);


    console.log(math.add(8,5));
    console.log(math.substract(1,6));
    console.log(math.multiply(2,100));
    console.log(math.divide(0,5));

}

main();
