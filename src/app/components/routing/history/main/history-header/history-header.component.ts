import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryWeatherResponse } from '../../../../../services/weather/weather.model';
import { SvgIconComponent } from 'angular-svg-icon';
import { SvgPipe } from '../../../../../pipes/svg.pipe';
import { TempPipe } from '../../../../../pipes/temp.pipe';
import { WeatherPipe } from '../../../../../pipes/weather.pipe';

@Component({
  selector: 'app-history-header',
  standalone: true,
  templateUrl: './history-header.component.html',
  styleUrls: ['./history-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    SvgIconComponent,
    SvgPipe,
    TempPipe,
    WeatherPipe,
  ],
})
export class HistoryHeaderComponent {
  @Input() @HostBinding('class.history-loading') historyLoading = true;
  @Input() history!: HistoryWeatherResponse | undefined;
}
