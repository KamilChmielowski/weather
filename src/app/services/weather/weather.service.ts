import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, Observable } from 'rxjs';

import { mockRealtimeWeather } from './weather.mock';
import { RealtimeWeatherResponse } from './weather.model';
import { environment } from '../../../environments/environment';

export interface RealtimeWeatherParams {
  q: string;
}

@Injectable({ providedIn: 'root' })
export class WeatherService {

  constructor(private httpClient: HttpClient) {}

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
      }).pipe(catchError(() => mockRealtimeWeather))
      : mockRealtimeWeather;
  }
}
