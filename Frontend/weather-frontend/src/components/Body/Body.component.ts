import { Component, OnInit } from '@angular/core';
import { WeatherModel } from '../../models/Weather.model';
import { WeatherService } from '../../services/Weather.service';

@Component({
  selector: 'app-Body',
  templateUrl: './Body.component.html',
  styleUrls: ['./Body.component.css'],
  providers: [WeatherService]
})
export class BodyComponent implements OnInit {

  constructor(private weatherServices: WeatherService) { }

  currentWeather: WeatherModel;
  currentCity;
  ngOnInit() {

  }
  cityList = [
    "İstanbul", "Ankara", "İzmir", "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Aksaray", "Amasya",
    "Antalya", "Ardahan", "Artvin", "Aydın", "Balıkesir", "Bartın", "Batman", "Bayburt", "Bilecik", "Bingöl",
    "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Düzce",
    "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari",
    "Hatay", "Iğdır", "Isparta", "Kahramanmaraş", "Karabük", "Karaman", "Kars", "Kastamonu", "Kayseri",
    "Kırıkkale", "Kırklareli", "Kırşehir", "Kilis", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa",
    "Mardin", "Mersin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Osmaniye", "Rize", "Sakarya", "Samsun",
    "Siirt", "Sinop", "Sivas", "Şırnak", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak",
    "Van", "Yalova", "Yozgat", "Zonguldak"
  ]


  getCurrentWeather(city: String) {
    this.weatherServices.getWeatherByCityName(city).subscribe(response => {
      this.currentWeather = response;
      console.log(this.currentWeather);
    });
  }

  search() {
    let lowerCity = this.editCity(this.currentCity);
    this.getCurrentWeather(lowerCity);
    // Degsis
  }

  editCity(text: String): String {
    text = text.toLowerCase();
    return text;
  }




}
