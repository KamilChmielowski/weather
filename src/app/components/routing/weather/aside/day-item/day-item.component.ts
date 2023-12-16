import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';

import { RealtimeWeatherConditions } from '../../../../../services/weather/weather.model';
import { WeatherPipe } from '../../../../../pipes/weather.pipe';

@Component({
  selector: 'app-day-item',
  standalone: true,
  templateUrl: './day-item.component.html',
  styleUrls: ['./day-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    SvgIconComponent,
    WeatherPipe,
  ],
})
export class DayItemComponent {
  @Input() day!: string;
  @Input() conditions: RealtimeWeatherConditions | undefined;
  @Input() temp!: string;
  @Input() maxTemp!: string;
  @Input() minTemp!: string;
}
