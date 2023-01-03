import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient ) { }

  
  getData(){

    const API_KEY = environment.API_KEY
    const URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=London&aqi=no`

    return this.http.get(URL)
  }
}
