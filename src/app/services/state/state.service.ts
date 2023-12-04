import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { ForecastWeatherResponse } from '../weather/weather.model';
import { LocationModel } from './state.model';
import { locations } from './state.mock';

@Injectable({ providedIn: 'root' })
export class StateService {
  private _isLoading = true;
  private _location?: LocationModel;
  private _locations: LocationModel[] = [];
  private _weathers: (ForecastWeatherResponse | undefined)[] = [];

  private _isLoading$ = new BehaviorSubject<boolean>(this._isLoading);
  private _location$ = new Subject<LocationModel>();
  private _weather$ = new BehaviorSubject<ForecastWeatherResponse | undefined>(undefined);

  private index = 0;

  constructor() {
    this.loadLocationFromStorage();
  }

  get isLoading(): boolean {
    return this._isLoading;
  }

  get locations(): LocationModel[] {
    return this._locations;
  }

  get location(): LocationModel | undefined {
    return this._location;
  }

  get weathers(): (ForecastWeatherResponse | undefined)[] {
    return this._weathers;
  }

  get weather(): ForecastWeatherResponse | undefined {
    return this._weathers[this.index];
  }

  get isLoading$(): Observable<boolean> {
    return this._isLoading$.asObservable();
  }

  get location$(): Observable<LocationModel> {
    return this._location$.asObservable();
  }

  get weather$(): Observable<ForecastWeatherResponse | undefined> {
    return this._weather$.asObservable();
  }

  updateLoading(isLoading: boolean) {
    this._isLoading = isLoading;
    this._isLoading$.next(isLoading);
  }

  addLocation(location: LocationModel): void {
    if (this._locations.length < 5 && this._locations.findIndex(value => value.city === location.city) === -1) {
      this._location = location;
      this._locations.push(location);
      this.index = this._locations.length - 1;
      this._location$.next(this._locations[this.index]);
      this.updateLocationInStorage(locations)
    }
  }

  updateLocation(location: LocationModel): void {
    this._location = location;
    this._location$.next(location);
  }

  changeLocation(city: string): void {
    this.index = this._locations.findIndex(location => location.city === city);
    this._location = this._locations[this.index];
    this._location$.next(this._location);
    if (this._weathers[this.index]) {
      this._weather$.next(this._weathers[this.index]);
    }
  }

  addWeather(weather: ForecastWeatherResponse | undefined): void {
    this.weathers[this.index] = weather;
    this._weather$.next(weather);
  }

  updateWeathers(weathers: ForecastWeatherResponse[]): void {
    this._weathers = weathers;
    this._weather$.next(weathers[this.index]);
  }

  private updateLocationInStorage(locations: LocationModel[]): void {
    localStorage.setItem('locations', JSON.stringify(locations));
  }

  private loadLocationFromStorage(): void {
    this._locations = StateService.getLocationFromStorage();
  }

  static getLocationFromStorage(): LocationModel[] {
    let locations;
    try {
      locations = JSON.parse(localStorage.getItem('locations') || '[]') || [];
    } catch {
      locations = [];
    }
    if (!Array.isArray(locations) || locations.length === 0 || locations.length > 5) {
      return [];
    }
    if (locations.some((location: any) => !this.isLocationModel(location))) {
      return [];
    }
    return locations;
  }

  private static isLocationModel(model: any | LocationModel): model is LocationModel {
    return model.city !== undefined
      && model.city !== null
      && model.coords !== undefined
      && model.coords !== null
      && (typeof model.city === 'string' || model.city instanceof String)
      && Array.isArray(model.coords)
      && model.coords.length === 2
      && typeof model.coords[0] === 'number'
      && typeof model.coords[1] === 'number'
      && model.coords[0] >= -90
      && model.coords[0] <= 90
      && model.coords[1] >= -180
      && model.coords[1] < 180;
  }
}
