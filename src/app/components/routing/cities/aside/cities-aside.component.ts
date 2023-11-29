import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';

import { DayItemComponent } from '../../weather/aside/day-item/day-item.component';
import { HourItemComponent } from '../../weather/main/forecast/hour-item/hour-item.component';
import { RealtimeWeatherResponse } from '../../../../services/weather/weather.model';
import { WeatherHeaderComponent } from '../../weather/main/header/weather-header.component';

@Component({
  selector: 'app-cities-aside',
  standalone: true,
  templateUrl: './cities-aside.component.html',
  styleUrls: ['./cities-aside.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    DayItemComponent,
    HourItemComponent,
    SvgIconComponent,
    WeatherHeaderComponent,
  ],
})
export class CitiesAsideComponent {
  @Input() weather: RealtimeWeatherResponse | undefined;
}
