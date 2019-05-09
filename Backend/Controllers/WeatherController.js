const axios = require("axios");
module.exports.getWeatherByCityName = (req, res) => {

    axios.get("https://api.worldweatheronline.com/premium/v1/weather.ashx?key=e50b20cc177d41c6baa204625190905&q=istanbul&format=json&num_of_days=1").then(response => response.data).then(response =>
        res.json(response)
    )


};