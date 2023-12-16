import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

import { PrecitipationPipe } from '../../../../../pipes/precitipation.pipe';
import { PressurePipe } from '../../../../../pipes/pressure.pipe';
import { PropertyItemComponent } from '../../../../elements/property-item/property-item.component';
import { WeatherDataComponent } from '../../../../abstract/weather-data.component';
import { WindPipe } from '../../../../../pipes/wind.pipe';

@Component({
  selector: 'app-air-conditions',
  standalone: true,
  templateUrl: './air-conditions.component.html',
  styleUrls: ['./air-conditions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    PrecitipationPipe,
    PressurePipe,
    PropertyItemComponent,
    WindPipe,
  ],
})
export class AirConditionsComponent extends WeatherDataComponent {
  @Output() readonly seeMore$ = new EventEmitter<void>();
}
