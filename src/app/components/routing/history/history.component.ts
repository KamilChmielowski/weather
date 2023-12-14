import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { finalize, forkJoin, Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { HistoryAsideComponent } from './aside/history-aside.component';
import { HistoryFooterComponent } from './footer/history-footer.component';
import { HistoryMainComponent } from './main/history-main.component';
import { HistoryWeatherResponse } from '../../../services/weather/weather.model';
import { StateService } from '../../../services/state/state.service';
import { WeatherService } from '../../../services/weather/weather.service';

@Component({
  selector: 'app-history',
  standalone: true,
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'layout-page' },
  imports: [
    CommonModule,
    HistoryAsideComponent,
    HistoryMainComponent,
    HistoryFooterComponent,
  ],
})
export class HistoryComponent implements OnInit {
  @HostBinding('class.history-loading') protected historyLoading = true;
  protected currentHistoryLoading = true;
  protected history: HistoryWeatherResponse[] = [];
  protected currentHistory: HistoryWeatherResponse | undefined;

  constructor(
    private cdr: ChangeDetectorRef,
    private stateService: StateService,
    private weatherService: WeatherService,
  ) {}

  ngOnInit() {
    this.fetchHistoryWeather();
    this.fetchForecastWeather();
  }

  private fetchHistoryWeather(): void {
    forkJoin([
      this.getHistoryWeatherObservable(-1),
      this.getHistoryWeatherObservable(-2),
      this.getHistoryWeatherObservable(-3),
      this.getHistoryWeatherObservable(-4),
    ]).pipe(finalize(() => {
      this.historyLoading = false;
      this.currentHistoryLoading = false;
    })).subscribe(historyObj => {
      historyObj.sort((h1, h2) => {
        return h1.forecast.forecastday[0].date_epoch < h2.forecast.forecastday[0].date_epoch ? 1 : -1
      });
      this.currentHistory = historyObj.shift();
      this.history = historyObj;
      this.cdr.markForCheck();
    });
  }

  protected fetchSelectedDayFromPast(date: string): void {
    if (this.currentHistoryLoading) {
      return;
    }
    this.currentHistory = undefined;
    this.currentHistoryLoading = true;
    this.weatherService.getHistoryWeather(
      this.stateService.location?.city || this.stateService.locations[0].city, date
    ).pipe(finalize(() => this.currentHistoryLoading = false))
      .subscribe(history => {
        this.currentHistory = history;
        this.cdr.markForCheck();
      });
  }

  private getHistoryWeatherObservable(shiftDays: number): Observable<HistoryWeatherResponse> {
    return this.weatherService.getHistoryWeather(
      this.stateService.location?.city || this.stateService.locations[0].city,
      HistoryComponent.getHistoryDate(shiftDays),
    );
  }

  private fetchForecastWeather(): void {
    if (this.stateService.weather) {
      return;
    }
    this.weatherService.getForecastWeather({
      q: this.stateService.locations[0].city,
      days: environment.forecastDays
    }).subscribe(weather => this.stateService.addWeather(weather))
  }

  static getHistoryDate(shiftDays = 0): string {
    const date = new Date();
    date.setDate(date.getDate() + shiftDays);
    return HistoryComponent.getDateString(date);
  }

  static getDateString(date: Date): string {
    const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
    const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date);
    const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
    return `${year}-${month}-${day}`;
  }
}
