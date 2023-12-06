import { of } from 'rxjs';

export const getAutocompleteMock = of({
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "datasource": {
          "sourcename": "openstreetmap",
          "attribution": "© OpenStreetMap contributors",
          "license": "Open Database License",
          "url": "https://www.openstreetmap.org/copyright"
        },
        "country": "Poland",
        "country_code": "pl",
        "state": "Silesian Voivodeship",
        "county": "Górnośląsko-Zagłębiowska Metropolia",
        "city": "Gliwice",
        "lon": 18.6657306,
        "lat": 50.294113,
        "formatted": "Gliwice, Górnośląsko-Zagłębiowska Metropolia, Poland",
        "address_line1": "Gliwice",
        "address_line2": "Górnośląsko-Zagłębiowska Metropolia, Poland",
        "category": "administrative",
        "timezone": {
          "name": "Europe/Warsaw",
          "offset_STD": "+01:00",
          "offset_STD_seconds": 3600,
          "offset_DST": "+02:00",
          "offset_DST_seconds": 7200,
          "abbreviation_STD": "CET",
          "abbreviation_DST": "CEST"
        },
        "plus_code": "9F2W7MV8+J7",
        "plus_code_short": "V8+J7 Gliwice, Górnośląsko-Zagłębiowska Metropolia, Poland",
        "result_type": "city",
        "rank": {
          "importance": 0.5446964440511936,
          "confidence": 1,
          "confidence_city_level": 1,
          "match_type": "full_match"
        },
        "place_id": "514bf212526daa3240590b2aaa7ea5254940f00101f901ec18200000000000c00208"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          18.6657306,
          50.294113
        ]
      },
      "bbox": [
        18.5429915,
        50.2272112,
        18.7563234,
        50.3751413
      ]
    },
    {
      "type": "Feature",
      "properties": {
        "datasource": {
          "sourcename": "openstreetmap",
          "attribution": "© OpenStreetMap contributors",
          "license": "Open Database License",
          "url": "https://www.openstreetmap.org/copyright"
        },
        "country": "Poland",
        "country_code": "pl",
        "state": "Silesian Voivodeship",
        "county": "Górnośląsko-Zagłębiowska Metropolia",
        "city": "Gliwice",
        "postcode": "44-121",
        "suburb": "Stare Gliwice",
        "lon": 18.6244192,
        "lat": 50.3089903,
        "formatted": "Stare Gliwice, Gliwice, Silesian Voivodeship, Poland",
        "address_line1": "Stare Gliwice",
        "address_line2": "Gliwice, Silesian Voivodeship, Poland",
        "category": "administrative",
        "timezone": {
          "name": "Europe/Warsaw",
          "offset_STD": "+01:00",
          "offset_STD_seconds": 3600,
          "offset_DST": "+02:00",
          "offset_DST_seconds": 7200,
          "abbreviation_STD": "CET",
          "abbreviation_DST": "CEST"
        },
        "plus_code": "9F2W8J5F+HQ",
        "plus_code_short": "8J5F+HQ Gliwice, Górnośląsko-Zagłębiowska Metropolia, Poland",
        "result_type": "suburb",
        "rank": {
          "importance": 0.24469861684138924,
          "confidence": 1,
          "confidence_city_level": 1,
          "match_type": "full_match"
        },
        "place_id": "5196fecaefd99f324059ffa380fe8c274940f00101f9019bd4340000000000c00205"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          18.6244192,
          50.3089903
        ]
      },
      "bbox": [
        18.587933,
        50.2967359,
        18.6372835,
        50.3238381
      ]
    },
    {
      "type": "Feature",
      "properties": {
        "datasource": {
          "sourcename": "openstreetmap",
          "attribution": "© OpenStreetMap contributors",
          "license": "Open Database License",
          "url": "https://www.openstreetmap.org/copyright"
        },
        "country": "Poland",
        "country_code": "pl",
        "state": "Silesian Voivodeship",
        "state_district": "Górnośląsko-Zagłębiowska Metropolia",
        "county": "Gliwice County",
        "lon": 18.48550244150235,
        "lat": 50.3626831,
        "formatted": "Gliwice County, Poland",
        "address_line1": "Gliwice County",
        "address_line2": "Poland",
        "category": "administrative",
        "timezone": {
          "name": "Europe/Warsaw",
          "offset_STD": "+01:00",
          "offset_STD_seconds": 3600,
          "offset_DST": "+02:00",
          "offset_DST_seconds": 7200,
          "abbreviation_STD": "CET",
          "abbreviation_DST": "CEST"
        },
        "plus_code": "9F2W9F7P+36",
        "result_type": "county",
        "rank": {
          "importance": 0.4567547457262322,
          "confidence": 1,
          "match_type": "full_match"
        },
        "place_id": "51796154e3497c324059eca75a666c2e4940f00101f901d165200000000000c00209"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          18.48550244150235,
          50.3626831
        ]
      },
      "bbox": [
        18.3577446,
        50.1726179,
        18.8044048,
        50.5527135
      ]
    }
  ],
  "query": {
    "text": "gliwice",
    "parsed": {
      "city": "gliwice",
      "expected_type": "unknown"
    }
  }
});
