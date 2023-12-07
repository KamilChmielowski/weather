import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';

import { WeatherDataComponent } from '../../../abstract/weather-data.component';
import { PropertyItemComponent } from '../../../elements/property-item/property-item.component';
import { SvgPipe } from '../../../../pipes/svg.pipe';

@Component({
  selector: 'app-astronomy-aside',
  standalone: true,
  templateUrl: './astronomy-aside.component.html',
  styleUrls: ['./astronomy-aside.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    SvgIconComponent,
    SvgPipe,
  ],
})
export class AstronomyAsideComponent extends WeatherDataComponent {}
