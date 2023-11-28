import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';

import { DayItemComponent } from './day-item/day-item.component';
import { RealtimeWeatherResponse } from '../../../../services/weather/weather.model';

@Component({
  selector: 'app-weather-aside',
  standalone: true,
  templateUrl: './weather-aside.component.html',
  styleUrls: ['./weather-aside.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    DayItemComponent,
    SvgIconComponent,
  ],
})
export class WeatherAsideComponent {
  @Input() weather: RealtimeWeatherResponse | undefined;
}
