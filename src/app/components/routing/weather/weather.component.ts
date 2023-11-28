import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';

import { RealtimeWeatherResponse } from '../../../services/weather/weather.model';
import { StateComponent } from '../../../services/state/state.component';
import { WeatherAsideComponent } from './aside/weather-aside.component';
import { WeatherMainComponent } from './main/weather-main.component';

@Component({
  selector: 'app-weather',
  standalone: true,
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'layout-page' },
  imports: [
    CommonModule,
    SvgIconComponent,
    WeatherAsideComponent,
    WeatherMainComponent,
  ],
})
export class WeatherComponent extends StateComponent implements OnInit {
  private weather?: RealtimeWeatherResponse;

  ngOnInit(): void {
    this.observeWeather();
  }

  private observeWeather(): void {
    this.subscription.add(
      this.stateService.weather$.subscribe(weather => {
        this.weather = weather;
      })
    );
  }
}
