import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AirConditionsComponent } from './air-conditions/air-conditions.component';
import { ForecastComponent } from './forecast/forecast.component';
import { MoreDetailsComponent } from './more-details/more-details.component';
import { SearchInputComponent } from '../../../elements/search-input/search-input.component';
import { WeatherDataComponent } from '../../../abstract/weather-data.component';
import { WeatherHeaderComponent } from './header/weather-header.component';

@Component({
  selector: 'app-weather-main',
  standalone: true,
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AirConditionsComponent,
    CommonModule,
    ForecastComponent,
    MoreDetailsComponent,
    SearchInputComponent,
    WeatherHeaderComponent,
  ],
})
export class WeatherMainComponent extends WeatherDataComponent {
  moreDetails = false;
}
