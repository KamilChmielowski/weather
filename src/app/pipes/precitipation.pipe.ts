import { Pipe, PipeTransform } from '@angular/core';

import { Precitipation } from '../services/settings/settings.model';
import { RealtimeWeatherResponse } from '../services/weather/weather.model';
import { SettingsService } from '../services/settings/settings.service';

@Pipe({
  name: 'precitipation',
  standalone: true,
})
export class PrecitipationPipe implements PipeTransform {
  constructor(private settingsService: SettingsService) {}

  transform(weather: RealtimeWeatherResponse | undefined): string {
    return Precitipation.inches === this.settingsService.precitipation
      ? `${ weather?.current?.precip_in } in`
      : `${ weather?.current?.precip_mm } mm`;
  }
}
