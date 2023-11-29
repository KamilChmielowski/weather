import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';

import { StateService } from '../../../services/state/state.service';
import { WeatherAsideComponent } from './aside/weather-aside.component';
import { WeatherDataComponent } from '../../../services/weather/weather-data.component';
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
export class WeatherComponent extends WeatherDataComponent {
  constructor(
    protected override cdr: ChangeDetectorRef,
    protected override stateService: StateService) {
    super(cdr, stateService);
  }
}
