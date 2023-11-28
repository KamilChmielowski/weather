import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';

import { PrecitipationPipe } from '../../../../../pipes/precitipation.pipe';
import { PressurePipe } from '../../../../../pipes/pressure.pipe';
import { PropertyItemComponent } from '../../../../elements/property-item/property-item.component';
import { RealtimeWeatherResponse } from '../../../../../services/weather/weather.model';
import { WindPipe } from '../../../../../pipes/wind.pipe';

@Component({
  selector: 'app-air-conditions',
  standalone: true,
  templateUrl: './air-conditions.component.html',
  styleUrls: ['./air-conditions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    PrecitipationPipe,
    PressurePipe,
    PropertyItemComponent,
    SvgIconComponent,
    WindPipe,
  ],
})
export class AirConditionsComponent {
  @Input() weather: RealtimeWeatherResponse | undefined;

  @Output() readonly seeMore$ = new EventEmitter<void>();
}
