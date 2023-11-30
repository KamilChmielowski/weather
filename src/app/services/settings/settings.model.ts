export interface SettingsModel {
  temperature: Temperature,
  windSpeed: WindSpeed,
  pressure: Pressure,
  precitipation: Precitipation,
  distance: Distance,
}

export interface Setting<T> {
  key: T,
  value: string;
}

export enum Temperature {
  celsius = 'c',
  fahrenheit = 'f',
}

export enum WindSpeed {
  kmPerHour = 'k',
  mPerSec = 'm',
  knots = 'kn',
}

export enum Pressure {
  hectoPascal = 'h',
  inches = 'i',
  kiloPascal = 'k',
  mm = 'm',
}

export enum Precitipation {
  milimeters = 'm',
  inches = 'i',
}

export enum Distance {
  kilometers = 'k',
  miles = 'm',
}
