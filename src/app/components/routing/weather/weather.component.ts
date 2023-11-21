import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';
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
export class WeatherComponent {}
