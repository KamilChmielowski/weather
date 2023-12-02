import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';

import { DayItemComponent } from './day-item/day-item.component';
import { WeatherDataComponent } from '../../../abstract/weather-data.component';

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
export class WeatherAsideComponent extends WeatherDataComponent {}
