import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';

import { WeatherDataComponent } from '../../../abstract/weather-data.component';

@Component({
  selector: 'app-astronomy-aside',
  standalone: true,
  templateUrl: './astronomy-aside.component.html',
  styleUrls: ['./astronomy-aside.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    SvgIconComponent
  ],
})
export class AstronomyAsideComponent extends WeatherDataComponent {}
