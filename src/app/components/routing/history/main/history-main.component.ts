import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayPickerComponent } from './selected-day/day-picker.component';
import { HistoryAsideComponent } from '../aside/history-aside.component';
import { HistoryHeaderComponent } from './history-header/history-header.component';
import { HistoryWeatherResponse } from '../../../../services/weather/weather.model';
import { WeatherHeaderComponent } from '../../weather/main/header/weather-header.component';

@Component({
  selector: 'app-history-main',
  standalone: true,
  templateUrl: './history-main.component.html',
  styleUrls: ['./history-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    DayPickerComponent,
    HistoryAsideComponent,
    HistoryHeaderComponent,
    WeatherHeaderComponent,
  ],
})
export class HistoryMainComponent {
  @Input() historyLoading = true;
  @Input() history: HistoryWeatherResponse | undefined;
  @Output() protected readonly date$ = new EventEmitter<string>();
}
