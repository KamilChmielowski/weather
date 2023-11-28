export interface GeolocationResponse {
  results: GeolocationResult[],
  query: GeolocationQuery
}

export interface GeolocationResult {
  datasource: GeolocationDataSource,
  country: string,
  country_code: string,
  state: string,
  county: string,
  city: string,
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
  rank: GeolocationRank,
  place_id: string,
  bbox: GeolocationBBox,
}

export interface GeolocationDataSource {
  'sourcename': string,
  'attribution': string,
  'license': string,
  'url': string,
}

export interface GeolocationTimezone {
  name: string,
  offset_STD: string,
  offset_STD_seconds: number,
  offset_DST: string,
  offset_DST_seconds: number,
  abbreviation_STD: string,
  abbreviation_DST: string,
}

export interface GeolocationRank {
  importance: number,
  popularity: number,
  confidence: number,
  confidence_city_level: number | undefined,
  match_type: string,
}

export interface GeolocationBBox {
  lon1: number,
  lat1: number,
  lon2: number,
  lat2: number,
}

export interface GeolocationQuery {
  text: string,
  parsed: {
    city: string,
    expected_type: string,
  }
}
