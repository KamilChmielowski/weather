import { Pipe, PipeTransform } from '@angular/core';

import { Distance } from '../services/settings/settings.model';
import { RealtimeWeatherResponse } from '../services/weather/weather.model';

@Pipe({
  name: 'distance',
  standalone: true,
})
export class DistancePipe implements PipeTransform {
  transform(weather: RealtimeWeatherResponse | undefined): string {
    return Distance.kilometers
      ? `${ weather?.current?.vis_km } km`
      : `${ weather?.current?.vis_miles } mi`;
  }
}
