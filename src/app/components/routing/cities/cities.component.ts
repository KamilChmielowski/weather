import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';

import { CitiesAsideComponent } from './aside/cities-aside.component';
import { CitiesMainComponent } from './main/cities-main.component';
import { StateService } from '../../../services/state/state.service';
import { WeatherDataComponent } from '../../../services/weather/weather-data.component';

@Component({
  selector: 'app-aside',
  standalone: true,
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'layout-page' },
  imports: [
    CommonModule,
    SvgIconComponent,
    CitiesAsideComponent,
    CitiesMainComponent,
  ],
})
export class CitiesComponent extends WeatherDataComponent {
  constructor(
    protected override cdr: ChangeDetectorRef,
    protected override stateService: StateService) {
    super(cdr, stateService);
  }
}
