import yargs from 'yargs'

export const argvs =  yargs( process.argv.slice(2))
    .options({
        'b': {
            alias: 'base',
            demandOption: true,  
            describe: 'Es la base de la tabla de multiplicar',      
            type: 'number'
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            describe: 'Muestra la tabla en consola',
            default: false
        },
        'h':{
            alias: 'hasta',
            type: 'number',
            describe: 'Limite hasta donde se creara la tabla'            
        }
    })
    .check( (argv, option) => {
        if ( isNaN( argv.b ) ){
            throw 'La base tiene que ser un número'
        }else if ( isNaN(argv.h) ){
            throw 'El limite debe ser un número'
        }
        return true;
    })
    .argv;