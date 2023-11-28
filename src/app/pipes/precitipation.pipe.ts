import { Pipe, PipeTransform } from '@angular/core';

import { Precitipation } from '../services/settings/settings.model';
import { RealtimeWeatherResponse } from '../services/weather/weather.model';

@Pipe({
  name: 'precitipation',
  standalone: true,
})
export class PrecitipationPipe implements PipeTransform {
  transform(weather: RealtimeWeatherResponse | undefined): string {
    return Precitipation.inches
      ? `${ weather?.current?.precip_in } in`
      : `${ weather?.current?.precip_mm } mm`;
  }
}
