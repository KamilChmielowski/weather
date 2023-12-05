import { Injectable } from '@angular/core';

import {
  Distance,
  Precitipation,
  Pressure,
  SettingsModel,
  Temperature,
  WindSpeed } from './settings.model';
import { LocationModel } from '../state/state.model';

@Injectable({ providedIn: 'root' })
export class SettingsService {
  private _settings!: SettingsModel;

  get settings(): SettingsModel {
    return this._settings;
  }

  set temperature(value: Temperature) {
    this._settings.temperature = value;
    this.saveInLocaleStorage();
  }

  set windSpeed(value: WindSpeed) {
    this._settings.windSpeed = value;
    this.saveInLocaleStorage();
  }

  set pressure(value: Pressure) {
    this._settings.pressure = value;
    this.saveInLocaleStorage();
  }

  set precitipation(value: Precitipation) {
    this._settings.precitipation = value;
    this.saveInLocaleStorage();
  }

  set distance(value: Distance) {
    this._settings.distance = value;
    this.saveInLocaleStorage();
  }

  constructor() {
    this.loadSettingsFromStorage();
  }

  private saveInLocaleStorage(): void {
    localStorage.setItem('settings', JSON.stringify(this._settings));
  }

  private loadSettingsFromStorage(): void {
    let settings;
    try {
      settings = JSON.parse(localStorage.getItem('settings') || '');
    } catch {
      settings = this.getDefaultSettings();
    }
    this._settings = this.isSettingsModel(settings) ? settings : this.getDefaultSettings();
  }

  private isSettingsModel(model: any | SettingsModel): model is SettingsModel {
    return model.temperature
      && model.windSpeed
      && model.pressure
      && model.precitipation
      && model.distance
      && Object.values(Temperature).includes(model.temperature)
      && Object.values(WindSpeed).includes(model.windSpeed)
      && Object.values(Pressure).includes(model.pressure)
      && Object.values(Precitipation).includes(model.precitipation)
      && Object.values(Distance).includes(model.distance);
  }

  private getDefaultSettings(): SettingsModel {
    return {
      temperature: Temperature.celsius,
      windSpeed: WindSpeed.kmPerHour,
      pressure: Pressure.hectoPascal,
      precitipation: Precitipation.milimeters,
      distance: Distance.kilometers,
    };
  }
}
