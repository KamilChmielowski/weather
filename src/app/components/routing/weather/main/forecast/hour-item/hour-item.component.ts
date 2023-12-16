import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { SvgIconComponent } from 'angular-svg-icon';
import { WeatherPipe } from '../../../../../../pipes/weather.pipe';
import { RealtimeWeatherConditions } from '../../../../../../services/weather/weather.model';

@Component({
  selector: 'app-hour-item',
  standalone: true,
  templateUrl: './hour-item.component.html',
  styleUrls: ['./hour-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    SvgIconComponent,
    WeatherPipe,
  ],
})
export class HourItemComponent {
  @Input() hour!: number;
  @Input() condition!: RealtimeWeatherConditions | undefined;
  @Input() temp!: number | string;
}
