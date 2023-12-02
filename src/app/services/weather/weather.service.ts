import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, finalize, Observable, tap } from 'rxjs';

import { mockRealtimeWeather } from './weather.mock';
import { RealtimeWeatherResponse } from './weather.model';
import { environment } from '../../../environments/environment';
import { StateService } from '../state/state.service';

export interface RealtimeWeatherParams {
  q: string;
}

@Injectable({ providedIn: 'root' })
export class WeatherService {

  constructor(
    private httpClient: HttpClient,
    private stateService: StateService,
  ) {}

  getRealtimeWeather(searchParams: RealtimeWeatherParams): Observable<RealtimeWeatherResponse> {
    return environment.isProduction
      ? this.httpClient.get<RealtimeWeatherResponse>(
      `https://weatherapi-com.p.rapidapi.com/current.json`, {
        headers: {
          'X-RapidAPI-Key': '5342b1c5bbmshed6f38ea124fc16p1bb353jsnfa4eb77a9c57',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
        },
        params: new HttpParams({
          fromObject: JSON.parse(JSON.stringify(searchParams)),
        }),
      }).pipe(
        tap(() => this.stateService.updateLoading(true)),
        catchError(() => mockRealtimeWeather),
        finalize(() => this.stateService.updateLoading(false)),
      )
      : mockRealtimeWeather;
  }
}
