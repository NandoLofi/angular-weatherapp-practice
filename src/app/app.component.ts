import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = "weather"

  constructor(private weather: WeatherService){
    this.weather.getData().subscribe(data=> {
      console.log(data)
    })
  }
  }
