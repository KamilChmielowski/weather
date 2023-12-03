import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';

import { DayItemComponent } from './day-item/day-item.component';
import { DayPipe } from '../../../../pipes/day.pipe';
import { TempPipe } from '../../../../pipes/temp.pipe';
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
    DayPipe,
    SvgIconComponent,
    TempPipe,
  ],
})
export class WeatherAsideComponent extends WeatherDataComponent {}
