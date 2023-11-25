import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { GeolocationService } from './services/geolocation/geolocation.service';
import { WeatherService } from './services/weather/weather.service';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [WeatherService],
})
export class AppComponent implements OnInit {
  constructor(
    private geolocationService: GeolocationService,
    private weatherService: WeatherService,
    ) {}

  ngOnInit() {
    // this.geolocationService.getCityGeolocation('gliwice').subscribe(res => {
    //   console.log(res)
    // })
    // this.weatherService.getRealtimeWeather({ q: '53.1,-0.13' }).subscribe(res => {
    //   console.log(res)
    // });
  }
}
