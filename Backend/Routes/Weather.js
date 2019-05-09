const router = require("express").Router();
const weatherCtrl = require("../Controllers/WeatherController");

router.get("/getWeather", weatherCtrl.getWeatherByCityName);
module.exports = router;