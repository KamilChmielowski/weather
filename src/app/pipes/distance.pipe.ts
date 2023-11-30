import { Pipe, PipeTransform } from '@angular/core';

import { Distance } from '../services/settings/settings.model';
import { RealtimeWeatherResponse } from '../services/weather/weather.model';
import { SettingsService } from '../services/settings/settings.service';

@Pipe({
  name: 'distance',
  standalone: true,
})
export class DistancePipe implements PipeTransform {
  constructor(private settingsService: SettingsService) {}

  transform(weather: RealtimeWeatherResponse | undefined): string {
    return Distance.kilometers === this.settingsService.distance
      ? `${ weather?.current?.vis_km } km`
      : `${ weather?.current?.vis_miles } mi`;
  }
}
