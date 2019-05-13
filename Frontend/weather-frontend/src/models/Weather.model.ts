export class WeatherModel {

    data: {
        current_condition: [
            {
                temp_C: String,
                temp_F: String,
                weatherIconUrl: [
                    {
                        value: String
                    }
                ]
            }
        ],
        weather: [
            {
                maxTempC: String,
                maxTempF: String,
                minTempC: String,
                minTempF: String,
                hourly: [{
                    humidity: String
                }]
            }
        ]
    }


};