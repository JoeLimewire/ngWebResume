import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

 

  data?: weatherData;
  URL = "https://www.metaweather.com/api/location/28218/";

  constructor(private service: WeatherService) { }

  ngOnInit(): void { 
    this.service.getWeather().subscribe((data) => console.log(data))
    //this.getData(); 
  }


  
}
 export class weatherData{
  constructor(
    consolidated_weather:[
      id:number,
      weather_state_name: string,
      weather_state_abbr: string,
      wind_direction_compass:string,
      created: string,
      applicable_date:string,
      min_temp:number,
      max_temp:number,
      the_temp:number,
      wind_speed: number,
      wind_direction: number,
      air_pressure: number,
      humidity: number,
      visibility: number,
      predictability: number
    ]
  ){
    }
 }


