import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { RealtimeWeatherResponse } from '../weather/weather.model';

@Injectable({ providedIn: 'root' })
export class StateService {
  private _location$ = new Subject<[number, number]>();
  private _weather$ = new BehaviorSubject<RealtimeWeatherResponse | undefined>(undefined);

  private _city: string = '';
  private _cities: string[] =  [];

  get city(): string {
    return this._city || ''
  }

  get cities(): string[] {
    return this._cities;
  }

  get location$(): Observable<[number, number]> {
    return this._location$.asObservable();
  }

  get weather$(): Observable<RealtimeWeatherResponse | undefined> {
    return this._weather$.asObservable();
  }

  updateLocation(location: [number, number], city: string | undefined): void {
    this._location$.next(location);
    this._city = city || '';
    this.addCity(city);
  }

  addCity(city: string | undefined): void {
    if (city) {
      this._cities.push(city);
    }
  }

  updateWeather(weather: RealtimeWeatherResponse): void {
    this._weather$.next(weather);
  }
}
