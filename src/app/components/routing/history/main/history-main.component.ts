import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayPickerComponent } from './selected-day/day-picker.component';
import { HistoryHeaderComponent } from './history-header/history-header.component';
import { HistoryWeatherResponse } from '../../../../services/weather/weather.model';

@Component({
  selector: 'app-history-main',
  standalone: true,
  templateUrl: './history-main.component.html',
  styleUrls: ['./history-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    DayPickerComponent,
    HistoryHeaderComponent,
  ],
})
export class HistoryMainComponent {
  @Input() historyLoading = true;
  @Input() history: HistoryWeatherResponse | undefined;

  @Output() protected readonly date$ = new EventEmitter<string>();
}
