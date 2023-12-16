import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistancePipe } from '../../../../pipes/distance.pipe';
import { HistoryWeatherResponse } from '../../../../services/weather/weather.model';
import { HourItemComponent } from '../../weather/main/forecast/hour-item/hour-item.component';
import { PrecitipationPipe } from '../../../../pipes/precitipation.pipe';
import { PropertyItemComponent } from '../../../elements/property-item/property-item.component';
import { TempPipe } from '../../../../pipes/temp.pipe';
import { WindPipe } from '../../../../pipes/wind.pipe';

@Component({
  selector: 'app-history-footer',
  standalone: true,
  templateUrl: './history-footer.component.html',
  styleUrls: ['./history-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    DistancePipe,
    HourItemComponent,
    PrecitipationPipe,
    PropertyItemComponent,
    TempPipe,
    WindPipe,
  ],
})
export class HistoryFooterComponent {
  @Input() @HostBinding('class.history-loading') historyLoading = true;
  @Input() history: HistoryWeatherResponse | undefined;
}
