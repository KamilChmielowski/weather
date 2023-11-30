import { Pipe, PipeTransform } from '@angular/core';
import { RealtimeWeatherConditions } from '../services/weather/weather.model';

@Pipe({
  name: 'weather',
  standalone: true,
})
export class WeatherPipe implements PipeTransform {
  transform(conditions?: RealtimeWeatherConditions): string {
    return conditions
      ? `assets/svg/weather/${ conditions.icon?.includes('day') ? 'day' : 'night' }/${conditions.text?.toLowerCase().split(' ').join('-')}.svg`
      : '';
  }
}
