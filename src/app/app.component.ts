import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { WeatherService } from './services/weather/weather.service';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [WeatherService],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getRealtimeWeather({ q: '53.1,-0.13' }).subscribe(res => {
      console.log(res)
    });
  }
}
