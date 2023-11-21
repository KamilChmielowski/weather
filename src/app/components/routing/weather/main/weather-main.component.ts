import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';
import { HeaderComponent } from './header/header.component';
import { AirConditionsComponent } from './air-conditions/air-conditions.component';
import { ForecastComponent } from './forecast/forecast.component';
import { WeatherAsideComponent } from '../aside/weather-aside.component';

@Component({
  selector: 'app-weather-main',
  standalone: true,
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    SvgIconComponent,
    HeaderComponent,
    AirConditionsComponent,
    ForecastComponent,
    WeatherAsideComponent,
  ],
})
export class WeatherMainComponent {}
