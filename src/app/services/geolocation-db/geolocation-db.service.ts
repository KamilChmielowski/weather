import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { delay, Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { GeolocationDbResponse } from './geolocation-db.model';

@Injectable({ providedIn: 'root' })
export class GeolocationDbService {
  private readonly apiKey = '70a96070-8761-11ee-93b1-ed9b3fb42532';

  constructor(private httpClient: HttpClient,) {}

  getLocationBasedOnIp(): Observable<GeolocationDbResponse> {
    return this.httpClient.get<GeolocationDbResponse>(
      `https://geolocation-db.com/json/${this.apiKey}`
    ).pipe(delay(environment.apiDelay));
  }
}
