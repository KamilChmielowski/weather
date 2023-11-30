import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';

import { RealtimeWeatherResponse } from '../../../../../services/weather/weather.model';
import { SvgPipe } from '../../../../../pipes/svg.pipe';
import { TempPipe } from '../../../../../pipes/temp.pipe';
import { WeatherPipe } from '../../../../../pipes/weather.pipe';

@Component({
  selector: 'app-weather-header',
  standalone: true,
  templateUrl: './weather-header.component.html',
  styleUrls: ['./weather-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    SvgIconComponent,
    SvgPipe,
    TempPipe,
    WeatherPipe,
  ],
})
export class WeatherHeaderComponent {
  @Input() weather: RealtimeWeatherResponse | undefined;
}
