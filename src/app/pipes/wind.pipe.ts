import { Pipe, PipeTransform } from '@angular/core';

import { RealtimeWeatherResponse } from '../services/weather/weather.model';
import { SettingsService } from '../services/settings/settings.service';
import { WindSpeed } from '../services/settings/settings.model';

@Pipe({
  name: 'wind',
  standalone: true,
})
export class WindPipe implements PipeTransform {
  constructor(private settingsService: SettingsService) {}

  transform(weather: RealtimeWeatherResponse | undefined): string {
    switch(this.settingsService.settings.windSpeed) {
      case WindSpeed.kmPerHour: return weather?.current?.wind_kph + ' km/h'
      case WindSpeed.mPerSec: return weather?.current?.wind_mph + ' m/s'
      case WindSpeed.knots: return ((weather?.current?.wind_mph || 0) * 1.943844).toFixed(2) + ' kn'
    }
  }
}
