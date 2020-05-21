const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            demand: true,
            desc: 'Dirección para buscar clima'
        }
    })
    .help()
    .argv


module.exports = {
    argv
}