import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { WeatherModel } from '../models/Weather.model';
@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  getWeatherByCityName(city): Observable<WeatherModel> {
    return this.httpClient.get<WeatherModel>("http://localhost:8000/getWeather/" + city);
  };

}
