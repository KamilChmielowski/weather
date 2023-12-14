import { Pipe, PipeTransform } from '@angular/core';

import { Precitipation } from '../services/settings/settings.model';
import { HistoryWeatherResponse, RealtimeWeatherResponse } from '../services/weather/weather.model';
import { SettingsService } from '../services/settings/settings.service';
import { WindPipe } from './wind.pipe';

@Pipe({
  name: 'precitipation',
  standalone: true,
})
export class PrecitipationPipe implements PipeTransform {
  constructor(private settingsService: SettingsService) {}

  transform(weather: RealtimeWeatherResponse | HistoryWeatherResponse | undefined): string {
    if (!weather) {
      return '';
    }
    if (WindPipe.isForecastWeatherDay(weather)) {
      const obj = weather?.forecast?.forecastday?.at(0)?.day;
      return Precitipation.inches === this.settingsService.settings.precitipation
        ? `${ obj?.totalprecip_in } in` : `${ obj?.totalprecip_mm } mm`;
    }
    return Precitipation.inches === this.settingsService.settings.precitipation
      ? `${ weather?.current?.precip_in } in` : `${ weather?.current?.precip_mm } mm`;
  }
}
