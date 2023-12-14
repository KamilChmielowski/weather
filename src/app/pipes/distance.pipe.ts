import { Pipe, PipeTransform } from '@angular/core';

import { Distance } from '../services/settings/settings.model';
import { HistoryWeatherResponse, RealtimeWeatherResponse } from '../services/weather/weather.model';
import { SettingsService } from '../services/settings/settings.service';
import { WindPipe } from './wind.pipe';

@Pipe({
  name: 'distance',
  standalone: true,
})
export class DistancePipe implements PipeTransform {
  constructor(private settingsService: SettingsService) {}

  transform(weather: RealtimeWeatherResponse | HistoryWeatherResponse | undefined): string {
    if (!weather) {
      return '';
    }
    if (WindPipe.isForecastWeatherDay(weather)) {
      const obj = weather?.forecast?.forecastday?.at(0)?.day;
      return Distance.kilometers === this.settingsService.settings.distance
        ? `${ obj?.avgvis_km } km` : `${ obj?.avgvis_miles } mi`;
    }
    return Distance.kilometers === this.settingsService.settings.distance
      ? `${ weather?.current?.vis_km } km` : `${ weather?.current?.vis_miles } mi`;
  }
}
