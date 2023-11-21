import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';

import { AirConditionsComponent } from './air-conditions/air-conditions.component';
import { ForecastComponent } from './forecast/forecast.component';
import { WeatherAsideComponent } from '../aside/weather-aside.component';
import { WeatherHeaderComponent } from './header/weather-header.component';

@Component({
  selector: 'app-weather-main',
  standalone: true,
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AirConditionsComponent,
    CommonModule,
    ForecastComponent,
    SvgIconComponent,
    WeatherAsideComponent,
    WeatherHeaderComponent,
  ],
})
export class WeatherMainComponent {}
