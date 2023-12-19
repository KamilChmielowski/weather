import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayItemComponent } from '../../weather/aside/day-item/day-item.component';
import { HistoryWeatherResponse } from '../../../../services/weather/weather.model';
import { TempPipe } from '../../../../pipes/temp.pipe';

@Component({
  selector: 'app-history-aside',
  standalone: true,
  templateUrl: './history-aside.component.html',
  styleUrls: ['./history-aside.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    DayItemComponent,
    TempPipe,
  ],
})
export class HistoryAsideComponent {
  @Input() historyLoading = true;
  @Input() set history(value: HistoryWeatherResponse[]) {
    if (value?.length > 0) {
      this._history = value;
      this.historyLabel = [
        this.getDayFormatDate(value[0].forecast.forecastday[0].date),
        this.getDayFormatDate(value[1].forecast.forecastday[0].date),
        this.getDayFormatDate(value[2].forecast.forecastday[0].date),
      ];
    }
  }

  get history(): HistoryWeatherResponse[] {
    return this._history;
  }

  protected historyLabel = ['', '', ''];
  private _history: HistoryWeatherResponse[] = [];

  private getDayFormatDate(date: Date): string {
    date = new Date(date);
    const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
    const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
    return `${day} ${month}`;
  }
}
