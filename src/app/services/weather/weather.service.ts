import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, delay, finalize, Observable, tap } from 'rxjs';

import {
  mockAstronomyWeather,
  mockForecastWeather,
  mockHistoryWeather,
  mockRealtimeWeather,
} from './weather.mock';
import {
  AstronomyWeatherResponse,
  ForecastWeatherParams,
  ForecastWeatherResponse,
  HistoryWeatherResponse,
  RealtimeWeatherParams,
  RealtimeWeatherResponse
} from './weather.model';
import { environment } from '../../../environments/environment';
import { StateService } from '../state/state.service';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private readonly weatherBase = 'https://weatherapi-com.p.rapidapi.com/';
  private readonly headers = {
    'X-RapidAPI-Key': '5342b1c5bbmshed6f38ea124fc16p1bb353jsnfa4eb77a9c57',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
  }
  private readonly options = (searchParams: any) => ({
    headers: this.headers,
    params: new HttpParams({
      fromObject: JSON.parse(JSON.stringify(searchParams)),
    }),
  });

  constructor(
    private httpClient: HttpClient,
    private stateService: StateService,
  ) {}

  getRealtimeWeather(searchParams: RealtimeWeatherParams): Observable<RealtimeWeatherResponse> {
    return environment.isProduction
      ? this.loadingPipe<RealtimeWeatherResponse>(
        this.httpClient.get<RealtimeWeatherResponse>(`${this.weatherBase}current.json`, this.options(searchParams))
      ).pipe(catchError(() => mockRealtimeWeather))
      : mockRealtimeWeather;
  }

  getForecastWeather(searchParams: ForecastWeatherParams): Observable<ForecastWeatherResponse> {
    if (!searchParams.days) {
      searchParams.days = 7;
    }
    return environment.isProduction
      ? this.loadingPipe<ForecastWeatherResponse>(
        this.httpClient.get<ForecastWeatherResponse>(`${this.weatherBase}forecast.json`, this.options(searchParams))
      ).pipe(catchError(() => mockForecastWeather))
      : mockForecastWeather;
  }

  getAstronomyWeather(city: string): Observable<AstronomyWeatherResponse> {
    return environment.isProduction
      ? this.httpClient.get<AstronomyWeatherResponse>(`${this.weatherBase}astronomy.json`, this.options({ q: city.toLowerCase() }))
        .pipe(
          delay(environment.apiDelay),
          catchError(() => mockAstronomyWeather)
        )
      : mockAstronomyWeather;
  }

  getHistoryWeather(city: string, date: string): Observable<HistoryWeatherResponse> {
    return environment.isProduction
      ? this.httpClient.get<HistoryWeatherResponse>(`${this.weatherBase}history.json`, this.options({
        q: city.toLowerCase(),
        dt: date,
      })).pipe(
        delay(environment.apiDelay),
        catchError(() => mockHistoryWeather)
      ) : mockHistoryWeather;
  }

  private loadingPipe<T>(observable: Observable<T>): Observable<T> {
    return observable.pipe(
      tap(() => this.stateService.updateLoading(true)),
      delay(environment.apiDelay),
      finalize(() => this.stateService.updateLoading(false)),
    );
  }
}
