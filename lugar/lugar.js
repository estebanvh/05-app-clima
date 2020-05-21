const axios = require('axios');


const getLugarLatLng = async(direccion) => {

    let encodedParameter = encodeURI(direccion);
    console.log("EncodedURI transforma los caracteres especiales", encodedParameter);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedParameter}`,
        headers: {
            "x-rapidapi-key": "4860f8c052msh7fd5e6e518ea804p1e6a08jsn8985bc10a7f1"
        }
    });

    const resp = await instance.get();

    if (resp.data.Results.length == 0) {
        throw new Error(`No hay resultados para ${direccion}`)
    }

    let { name: nombre, lat, lon: lng } = resp.data.Results[0];

    return {
        nombre,
        lat,
        lng
    };

}

module.exports = {
    getLugarLatLng
}