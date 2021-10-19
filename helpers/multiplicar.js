
import { throws } from 'assert';
import colors from 'colors';
import * as fs from 'fs';

export const crearArchivo = async( base = 5, listar = false, hasta = 10) => {
    try {
        let salida ="";
        let consola = "";
        
        for (let index = 1; index <= hasta; index++) {
            salida += ` ${ base } x ${ index } = ${ index * base } \n`;
            consola += ` ${ base } ${ 'x'.magenta } ${ index } ${ '='.green } ${ index * base } \n`;
        }

        if ( listar ) {
            console.log('==================='.green );
            console.log('  Tabla del:'.yellow, colors.blue( base ) );
            console.log('==================='.green );
            console.log( consola );
        };

        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida );

        return `tabla-${ base }.txt`;
    } catch ( err ) {
        throw err;
        
    }
        
}

// fs.writeFile(`tabla-${ base }.txt`, salida, ( err ) => {
//     if ( err ) throw err;
//     console.log('Archivo grabado')
// });

