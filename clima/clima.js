const axios = require('axios');



const getClima = async(lat, long) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=860b949ceacf125d8f5b1622608910d8&units=metric`);
    return resp.data.main.temp;

}

module.exports = {
    getClima
}