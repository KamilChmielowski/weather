export interface RealtimeWeatherParams {
  q: string;
}

export interface ForecastWeatherParams {
  q: string;
  days?: number;
}

export interface RealtimeWeatherResponse {
  location: RealtimeWeatherLocation,
  current: RealtimeWeatherCurrent,
}

export interface ForecastWeatherResponse extends RealtimeWeatherResponse {
  forecast: {
    forecastday: Forecastday[];
  }
}

export interface Forecastday {
  date: Date,
  date_epoch: number,
  day: ForecastWeatherDay,
  astro: ForecastWeatherAstro,
  hour: RealtimeWeatherCurrent[]
}

export interface ForecastWeatherDay {
  maxtemp_c: number,
  maxtemp_f: number,
  mintemp_c: number,
  mintemp_f:number,
  avgtemp_c: number,
  avgtemp_f: number,
  maxwind_mph: number,
  maxwind_kph: number,
  totalprecip_mm: number,
  totalprecip_in: number,
  totalsnow_cm: number,
  avgvis_km: number,
  avgvis_miles: number,
  avghumidity: number,
  daily_will_it_rain: number,
  daily_chance_of_rain: number,
  daily_will_it_snow: number,
  daily_chance_of_snow: number,
  condition: RealtimeWeatherConditions,
  uv: 1,
}

export interface ForecastWeatherAstro {
  sunrise: Date,
  sunset: Date,
  moonrise: Date,
  moonset: Date,
  moon_phase: string,
  moon_illumination: number,
  is_moon_up: number,
  is_sun_up: number,
}

export interface RealtimeWeatherLocation {
  name: string,
  region: string,
  country: string,
  lat: number,
  lon: number,
  tz_id: string,
  localtime_epoch: number,
  localtime: Date,
}

export interface RealtimeWeatherCurrent {
  last_updated_epoch: number,
  last_updated: Date,
  temp_c: number,
  temp_f: number,
  is_day: number,
  condition: RealtimeWeatherConditions,
  wind_mph: number,
  wind_kph: number,
  wind_degree: number,
  wind_dir: string,
  pressure_mb: number,
  pressure_in: number,
  precip_mm: number,
  precip_in: number,
  humidity: number,
  cloud: number,
  feelslike_c: number,
  feelslike_f: number,
  vis_km: number,
  vis_miles: number,
  uv: number,
  gust_mph: number,
  gust_kph: number,
}

export interface RealtimeWeatherConditions {
  text: string,
  icon: string,
  code: number,
}

export interface AstronomyWeatherResponse {
  location: RealtimeWeatherLocation,
  astronomy: AstronomyWeather,
}

export interface AstronomyWeather {
  astro: {
    sunrise: string,
    sunset: string,
    moonrise: string,
    moonset: string,
    moon_phase: string,
    moon_illumination: number,
    is_moon_up: number,
    is_sun_up: number,
  }
}

export interface HistoryWeatherResponse {
  location: RealtimeWeatherLocation,
  forecast: {
    forecastday: Forecastday[];
  }
}
