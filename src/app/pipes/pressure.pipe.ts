import { Pipe, PipeTransform } from '@angular/core';

import { Pressure } from '../services/settings/settings.model';
import { RealtimeWeatherResponse } from '../services/weather/weather.model';
import { SettingsService } from '../services/settings/settings.service';

@Pipe({
  name: 'pressure',
  standalone: true,
})
export class PressurePipe implements PipeTransform {
  constructor(private settingsService: SettingsService) {}

  transform(weather: RealtimeWeatherResponse | undefined): string {
    switch(this.settingsService.settings.pressure) {
      case Pressure.hectoPascal: return weather?.current?.pressure_mb + ' hPa'
      case Pressure.kiloPascal: return ((weather?.current?.pressure_mb || 0) * 0.1).toFixed(2) + ' kPa'
      case Pressure.mm: return ((weather?.current?.pressure_mb || 0) * 0.75006157584566).toFixed(2) + ' mmHg'
      case Pressure.inches: return weather?.current?.pressure_in + ' inHg'
    }
  }
}
