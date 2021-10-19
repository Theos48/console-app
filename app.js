import { crearArchivo } from './helpers/multiplicar.js';
import { argvs } from './config/yargs.js';
import colors from 'colors';


console.clear();
console.log( argvs );

crearArchivo ( argvs.b, argvs.l, argvs.h )
    .then( nombreArchivo => console.log( nombreArchivo.green, 'creado'.yellow) )
    .catch( err => console.log( err ));
 