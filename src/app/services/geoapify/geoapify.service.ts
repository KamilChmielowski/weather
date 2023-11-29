import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { delay, Observable, of } from 'rxjs';

import { environment } from '../../../environments/environment';
import { GeolocationResponse } from './geolocation.model';
import { GeoAutocompleteResponse } from './geoautocomplete.model';
import { GeoAutocompleteMock } from './geoautocomplete.mock';

@Injectable({ providedIn: 'root' })
export class GeoapifyService {
  private readonly apiKey = '3d8f5406c9304cc58cabfdb82ac768f9';

  constructor(private httpClient: HttpClient) {}

  getGeolocation(city: string): Observable<GeolocationResponse> {
    return this.httpClient.get<GeolocationResponse>(
      `https://api.geoapify.com/v1/geocode/search?text=${city}&format=json&apiKey=${this.apiKey}`
    );
  }

  getAutocomplete(text: string | null): Observable<GeoAutocompleteResponse> {
    return environment.isProduction
      ? this.httpClient.get<GeoAutocompleteResponse>(
      `https://api.geoapify.com/v1/geocode/autocomplete?text=${text}&apiKey=${this.apiKey}`
      ) : of(GeoAutocompleteMock).pipe(
        delay(500),
      );
  }
}
