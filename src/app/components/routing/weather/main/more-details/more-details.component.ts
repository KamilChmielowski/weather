import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';

import { DistancePipe } from '../../../../../pipes/distance.pipe';
import { PrecitipationPipe } from '../../../../../pipes/precitipation.pipe';
import { PressurePipe } from '../../../../../pipes/pressure.pipe';
import { PropertyItemComponent } from '../../../../elements/property-item/property-item.component';
import { RealtimeWeatherResponse } from '../../../../../services/weather/weather.model';
import { TempPipe } from '../../../../../pipes/temp.pipe';
import { WindPipe } from '../../../../../pipes/wind.pipe';

@Component({
  selector: 'app-more-details',
  standalone: true,
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    DistancePipe,
    PrecitipationPipe,
    PressurePipe,
    PropertyItemComponent,
    SvgIconComponent,
    TempPipe,
    WindPipe,
  ],
})
export class MoreDetailsComponent {
  @Input() weather: RealtimeWeatherResponse | undefined;

  @Output() readonly collapse$ = new EventEmitter<void>();
}
