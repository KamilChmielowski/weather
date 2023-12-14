import { Pipe, PipeTransform } from '@angular/core';

import {
  HistoryWeatherResponse,
  RealtimeWeatherResponse
} from '../services/weather/weather.model';
import { SettingsService } from '../services/settings/settings.service';
import { WindSpeed } from '../services/settings/settings.model';

@Pipe({
  name: 'wind',
  standalone: true,
})
export class WindPipe implements PipeTransform {
  constructor(private settingsService: SettingsService) {}

  transform(weather: RealtimeWeatherResponse | HistoryWeatherResponse | undefined): string {
    if (!weather) {
      return '';
    }
    if (WindPipe.isForecastWeatherDay(weather)) {
      const obj = weather?.forecast?.forecastday?.at(0)?.day;
      switch(this.settingsService.settings.windSpeed) {
        case WindSpeed.kmPerHour: return obj?.maxwind_kph + ' km/h'
        case WindSpeed.mPerSec: return obj?.maxwind_mph + ' m/s'
        case WindSpeed.knots: return ((obj?.maxwind_mph || 0) * 1.943844).toFixed(2) + ' kn'
      }
    }
    const obj = weather?.current;
    switch(this.settingsService.settings.windSpeed) {
      case WindSpeed.kmPerHour: return obj?.wind_kph + ' km/h'
      case WindSpeed.mPerSec: return obj?.wind_mph + ' m/s'
      case WindSpeed.knots: return ((obj?.wind_mph || 0) * 1.943844).toFixed(2) + ' kn'
    }
  }

  static isForecastWeatherDay(model: any | HistoryWeatherResponse): model is HistoryWeatherResponse {
    return !!model.forecast;
  }
}
