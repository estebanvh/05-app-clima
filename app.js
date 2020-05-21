const { argv } = require('./config/yargs');
const { getLugarLatLng } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');

/*
getLugarLatLng(argv.direccion)
    .then(resp => console.log(resp))
    .catch(err => console.log(err))

getClima(35, 139)
    .then(resp => console.log(resp))
    .catch(err => console.log(err))
*/

const getInfo = async(direccion) => {
    let error = `No se pudo determinar el clima de ${direccion}`;

    try {
        let datosLugar = await getLugarLatLng(direccion);
        let datosClima = await getClima(datosLugar.lat, datosLugar.lng);
        return `El clima de ${datosLugar.nombre} es de ${datosClima}`;

    } catch (err) {
        return error;
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);