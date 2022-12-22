import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

const BASE_URI = "https://open-weather13.p.rapidapi.com/city"
const headers = {
  headers: {
    'X-RapidAPI-Key': '',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
  }
}
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string){
    this.http.get(BASE_URI)
  }
}
