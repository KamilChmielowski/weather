import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { ForecastWeatherResponse } from '../weather/weather.model';
import { LocationModel } from './state.model';

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
      this._locations.push(location);
      this.index = this._locations.length - 1;
      this._location$.next(this._locations[this.index]);
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
  }

  addWeather(weather: ForecastWeatherResponse | undefined): void {
    this.weathers[this.index] = weather;
    this._weather$.next(weather);
  }
}
