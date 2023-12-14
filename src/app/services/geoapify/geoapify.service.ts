import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, delay, Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { getAutocompleteMock } from './get-autocomplete.mock';
import { GeoAutocompleteResponse } from './geoautocomplete.model';
import { GeolocationResponse } from './geolocation.model';

@Injectable({ providedIn: 'root' })
export class GeoapifyService {
  private readonly apiKey = environment.apiKey.geoapify;

  constructor(private httpClient: HttpClient,) {}

  getGeolocation(city: string): Observable<GeolocationResponse> {
    return this.httpClient.get<GeolocationResponse>(
      `https://api.geoapify.com/v1/geocode/search?text=${city}&format=json&apiKey=${this.apiKey}`
    );
  }

  getAutocomplete(text: string | null): Observable<GeoAutocompleteResponse> {
    return environment.isProduction
      ? this.httpClient.get<GeoAutocompleteResponse>(
      `https://api.geoapify.com/v1/geocode/autocomplete?text=${text}&apiKey=${this.apiKey}`
      ).pipe(
        catchError(() => getAutocompleteMock),
      ) : getAutocompleteMock.pipe(delay(500));
  }
}
