import { Injectable } from '@angular/core';

import {
  Distance,
  Precitipation,
  Pressure,
  SettingsModel,
  Temperature,
  WindSpeed } from './settings.model';

@Injectable({ providedIn: 'root' })
export class SettingsService {
  private _settings: SettingsModel = {
    temperature: Temperature.celsius,
    windSpeed: WindSpeed.kmPerHour,
    pressure: Pressure.hectoPascal,
    precitipation: Precitipation.milimeters,
    distance: Distance.kilometers,
  };

  get settings(): SettingsModel {
    return this._settings;
  }

  set temperature(value: Temperature) {
    this._settings.temperature = value;
  }

  set windSpeed(value: WindSpeed) {
    this._settings.windSpeed = value;
  }

  set pressure(value: Pressure) {
    this._settings.pressure = value;
  }

  set precitipation(value: Precitipation) {
    this._settings.precitipation = value;
  }

  set distance(value: Distance) {
    this._settings.distance = value;
  }
}
