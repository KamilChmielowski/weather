import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';

import { HourItemComponent } from './hour-item/hour-item.component';
import { RealtimeWeatherResponse } from '../../../../../services/weather/weather.model';

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
export class ForecastComponent {
  @Input() weather: RealtimeWeatherResponse | undefined;
}
