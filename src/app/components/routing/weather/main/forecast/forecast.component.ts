import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';

import { HourItemComponent } from './hour-item/hour-item.component';
import { TempPipe } from '../../../../../pipes/temp.pipe';
import { WeatherDataComponent } from '../../../../abstract/weather-data.component';

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
    TempPipe,
  ],
})
export class ForecastComponent extends WeatherDataComponent {}
