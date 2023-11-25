import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { CityGeolocationResponse } from './geolocation.model';

@Injectable({ providedIn: 'root' })
export class GeolocationService {
  constructor(private httpClient: HttpClient) {}

  getCityGeolocation(city: string): Observable<CityGeolocationResponse> {
    return this.httpClient.get<CityGeolocationResponse>(
      `https://api.geoapify.com/v1/geocode/search?text=${city}&format=json&apiKey=3d8f5406c9304cc58cabfdb82ac768f9`
    );
  }
}
