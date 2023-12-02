import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';

import { HourItemComponent } from './hour-item/hour-item.component';
import { WeatherDataComponent } from '../../../../abstract/weather-data.component';

@Component({
  selector: 'app-forecast',
  standalone: true,
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    HourItemComponent,
    SvgIconComponent,
  ],
})
export class ForecastComponent extends WeatherDataComponent {}
