import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

import { DistancePipe } from '../../../../../pipes/distance.pipe';
import { PrecitipationPipe } from '../../../../../pipes/precitipation.pipe';
import { PressurePipe } from '../../../../../pipes/pressure.pipe';
import { PropertyItemComponent } from '../../../../elements/property-item/property-item.component';
import { TempPipe } from '../../../../../pipes/temp.pipe';
import { WeatherDataComponent } from '../../../../abstract/weather-data.component';
import { WindPipe } from '../../../../../pipes/wind.pipe';

@Component({
  selector: 'app-more-details',
  standalone: true,
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DistancePipe,
    PrecitipationPipe,
    PressurePipe,
    PropertyItemComponent,
    TempPipe,
    WindPipe,
  ],
})
export class MoreDetailsComponent extends WeatherDataComponent {
  @Output() readonly collapse$ = new EventEmitter<void>();
}
