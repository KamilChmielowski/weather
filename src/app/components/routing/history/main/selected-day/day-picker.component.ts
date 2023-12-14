import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { SvgIconComponent } from 'angular-svg-icon';

import { HistoryWeatherResponse } from '../../../../../services/weather/weather.model';
import { HistoryComponent } from '../../history.component';
import { SvgPipe } from '../../../../../pipes/svg.pipe';

@Component({
  selector: 'app-day-picker',
  standalone: true,
  templateUrl: './day-picker.component.html',
  styleUrls: ['./day-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SvgIconComponent,
    SvgPipe,
  ],
})
export class DayPickerComponent {
  @Input() historyLoading = true;
  @Input() set history(value: HistoryWeatherResponse | undefined) {
    if (value) {
      this._history = value;
      this.form.controls.date.setValue(value.forecast.forecastday[0].date as unknown as string);
      this.form.controls.date.enable();
    }
  }

  @Output() readonly date$ = new EventEmitter<string>();

  protected readonly yesterday = this.getYesterdayStringDate();
  protected _history!: HistoryWeatherResponse | undefined;
  protected readonly form = new FormGroup({
    date: new FormControl({value: '', disabled: true})
  })

  protected shiftDate(shiftDays: number): void {
    const date = new Date(this.form.controls.date.value || '');
    date.setDate(date.getDate() + shiftDays);
    this.form.controls.date.setValue(HistoryComponent.getDateString(date));
    this.date$.emit(this.form.controls.date.value || '');
  }

  private getYesterdayStringDate(): string {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    return HistoryComponent.getDateString(date);
  }
}
