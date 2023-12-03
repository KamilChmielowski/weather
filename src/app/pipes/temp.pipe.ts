import { Pipe, PipeTransform } from '@angular/core';

import { RealtimeWeatherCurrent } from '../services/weather/weather.model';
import { SettingsService } from '../services/settings/settings.service';
import { Temperature } from '../services/settings/settings.model';

@Pipe({
  name: 'temp',
  standalone: true,
})
export class TempPipe implements PipeTransform {
  constructor(private settingsService: SettingsService) {}

  transform(current: RealtimeWeatherCurrent | undefined, feelslike = false): string {
    if (!current) {
      return '';
    }
    return this.settingsService.settings.temperature === Temperature.celsius
      ? (feelslike ? current?.feelslike_c : current?.temp_c) + ' °C'
      : (feelslike ? current?.feelslike_f : current?.temp_f) + ' °F' || '';
  }
}
