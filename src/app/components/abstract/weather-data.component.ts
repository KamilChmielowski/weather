import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { forkJoin } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ForecastWeatherResponse } from '../../services/weather/weather.model';
import { LoadingComponent } from './loading.component';
import { StateService } from '../../services/state/state.service';
import { WeatherService } from '../../services/weather/weather.service';

@Component({ template: '' })
export abstract class WeatherDataComponent extends LoadingComponent implements OnInit {
  protected weather?: ForecastWeatherResponse | undefined;

  constructor(
    protected override cdr: ChangeDetectorRef,
    protected override stateService: StateService,
    protected weatherService: WeatherService,
  ) {
    super(cdr, stateService);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.observeWeather();
    this.observeLocation();
  }

  protected observeWeather(): void {
    this.subscription.add(
      this.stateService.weather$.subscribe(weather => {
        this.weather = weather;
        this.cdr.markForCheck();
      })
    );
  }

  protected observeLocation(): void {
    this.subscription.add(
      this.stateService.location$.subscribe(() => this.cdr.markForCheck())
    );
  }

  protected fetchLocations(): void {
    if (this.stateService.locations?.length === 0) {
      return;
    }
    forkJoin(this.stateService.locations.map(location => {
      return this.weatherService.getForecastWeather({ q: location.city, days: environment.forecastDays });
    })).subscribe(response => {
      this.stateService.changeLocation(this.stateService.locations[0].city);
      this.stateService.updateWeathers(response);
      this.cdr.markForCheck();
    })
  }
}
