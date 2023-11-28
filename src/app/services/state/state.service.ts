import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { RealtimeWeatherResponse } from '../weather/weather.model';

@Injectable({ providedIn: 'root' })
export class StateService {
  private _location$ = new Subject<[number, number]>();
  private _weather$ = new Subject<RealtimeWeatherResponse>();

  get location$(): Observable<[number, number]> {
    return this._location$.asObservable();
  }

  get weather$(): Observable<RealtimeWeatherResponse> {
    return this._weather$.asObservable();
  }

  updateLocation(location: [number, number]): void {
    this._location$.next(location);
  }

  updateWeather(weather: RealtimeWeatherResponse): void {
    this._weather$.next(weather);
  }
}
