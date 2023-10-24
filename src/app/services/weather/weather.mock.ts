import { of } from 'rxjs';

import { RealtimeWeatherResponse } from './weather.model';

export const mockRealtimeWeather = of<RealtimeWeatherResponse> ({
  location: {
    name: 'Boston',
    region: 'Lincolnshire',
    country: 'United Kingdom',
    lat: 53.1,
    lon: -0.13,
    tz_id: 'Europe/London',
    localtime_epoch: 1698166994,
    localtime: new Date('2023-10-24 18:03')
  },
  current: {
    last_updated_epoch: 1698166800,
    last_updated: new Date('2023-10-24 18:00'),
    temp_c: 11,
    temp_f: 51.8,
    is_day: 0,
    condition: {
      text: 'Partly cloudy',
      icon: '//cdn.weatherapi.com/weather/64x64/night/116.png',
      code: 1003
    },
    wind_mph: 5.6,
    wind_kph: 9,
    wind_degree: 320,
    wind_dir: 'NW',
    pressure_mb: 999,
    pressure_in: 29.5,
    precip_mm: 0,
    precip_in: 0,
    humidity: 94,
    cloud: 50,
    feelslike_c: 10.4,
    feelslike_f: 50.8,
    vis_km: 10,
    vis_miles: 6,
    uv: 1,
    gust_mph: 7.1,
    gust_kph: 11.4
  }
});
