import {
  GeolocationDataSource,
  GeolocationQuery,
  GeolocationRank,
  GeolocationTimezone,
} from './geolocation.model';

export interface GeoAutocompleteResponse {
  features: GeoAutocompleteFeature[],
  query: GeolocationQuery,
}

export interface GeoAutocompleteFeature {
  type: string,
  properties: Partial<GeoAutocompleteProperty>,
  geometry: GeoAutocompleteGeometry,
  bbox: number[],
}

export interface GeoAutocompleteProperty {
  datasource: GeolocationDataSource,
  country: string,
  country_code: string,
  state: string,
  county: string,
  city: string | undefined,
  lon: number,
  lat: number,
  formatted: string,
  address_line1: string,
  address_line2: string,
  category: string,
  timezone: GeolocationTimezone,
  plus_code: string,
  plus_code_short: string,
  result_type: string,
  rank: Partial<GeoAutocompleteRank>,
  place_id: string,
}

export interface GeoAutocompleteRank extends Omit<GeolocationRank, 'popularity'> {}

export interface GeoAutocompleteGeometry {
  type: string,
  coordinates: number[],
}
