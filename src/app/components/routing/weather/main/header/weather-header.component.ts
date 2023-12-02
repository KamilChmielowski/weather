import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';

import { StateService } from '../../../../../services/state/state.service';
import { SvgPipe } from '../../../../../pipes/svg.pipe';
import { TempPipe } from '../../../../../pipes/temp.pipe';
import { WeatherDataComponent } from '../../../../abstract/weather-data.component';
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
export class WeatherHeaderComponent extends WeatherDataComponent {
  constructor(
    protected override cdr: ChangeDetectorRef,
    public state: StateService,) {
    super(cdr, state);
  }
}
