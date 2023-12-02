import { Pipe, PipeTransform } from '@angular/core';

import { RealtimeWeatherResponse } from '../services/weather/weather.model';
import { SettingsService } from '../services/settings/settings.service';
import { Temperature } from '../services/settings/settings.model';

@Pipe({
  name: 'temp',
  standalone: true,
})
export class TempPipe implements PipeTransform {
  constructor(private settingsService: SettingsService) {}

  transform(weather: RealtimeWeatherResponse | undefined, feelslike = false): string {
    if (!weather) {
      return '';
    }
    return !weather ? '' : this.settingsService.settings.temperature === Temperature.celsius
      ? (feelslike ? weather?.current?.feelslike_c : weather?.current?.temp_c) + ' °C'
      : (feelslike ? weather?.current?.feelslike_f : weather?.current?.temp_f) + ' °F' || '';
  }
}
