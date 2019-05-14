const axios = require("axios");
const api_KEY = "b56ba0f225100d58f1a3db10eecbf747";

module.exports.getWeatherByCityName = (req, res) => {
    city = req.params.cityId;
    url = "https://api.worldweatheronline.com/premium/v1/weather.ashx?key=e50b20cc177d41c6baa204625190905&q="+city+"&format=json&num_of_days=1";
    console.log(url);
    console.log(city);
    axios.get(url).then((response) => {

        res.json(response.data)
    }).catch((error) => {
        res.json(error);
        console.log(error);
    });


};


