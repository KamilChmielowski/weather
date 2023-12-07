import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AstronomyWeatherResponse } from '../../../../services/weather/weather.model';
import { MoonInfoComponent } from './moon-info/moon-info.component';
import { RiseSetComponent } from './rise-set/rise-set.component';
import { WeatherDataComponent } from '../../../abstract/weather-data.component';
import { WeatherHeaderComponent } from '../../weather/main/header/weather-header.component';

@Component({
  selector: 'app-astronomy-main',
  standalone: true,
  templateUrl: './astronomy-main.component.html',
  styleUrls: ['./astronomy-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    MoonInfoComponent,
    RiseSetComponent,
    WeatherHeaderComponent,
  ],
})
export class AstronomyMainComponent extends WeatherDataComponent {
  @Input() @HostBinding('class.astronomy-loading') astronomyLoading = true;
  @Input() astronomy!: AstronomyWeatherResponse;
}
