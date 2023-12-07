import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { finalize } from 'rxjs';

import { AstronomyAsideComponent } from './aside/astronomy-aside.component';
import { AstronomyMainComponent } from './main/astronomy-main.component';
import { AstronomyWeatherResponse } from '../../../services/weather/weather.model';
import { environment } from '../../../../environments/environment';
import { StateService } from '../../../services/state/state.service';
import { WeatherService } from '../../../services/weather/weather.service';

@Component({
  selector: 'app-astronomy',
  standalone: true,
  templateUrl: './astronomy.component.html',
  styleUrls: ['./astronomy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'layout-page' },
  imports: [
    CommonModule,
    AstronomyAsideComponent,
    AstronomyMainComponent,
  ],
})
export class AstronomyComponent implements OnInit {
  @HostBinding('class.astronomy-loading') protected astronomyLoading = true;
  protected astronomy: AstronomyWeatherResponse = this.emptyResponse();
  protected lat: number | undefined;

  constructor(
    private cdr: ChangeDetectorRef,
    protected stateService: StateService,
    private weatherService: WeatherService,
  ) {}

  ngOnInit() {
    this.fetchAstronomyWeather();
    this.fetchForecastWeather();
    this.lat = this.stateService.weather?.location.lat;
  }

  private fetchAstronomyWeather(): void {
    this.weatherService.getAstronomyWeather(
      this.stateService.location?.city || this.stateService.locations[0].city
    ).pipe(finalize(() => this.astronomyLoading = false))
      .subscribe(astronomy => {
        this.astronomy = astronomy;
        this.cdr.markForCheck();
      });
  }

  private fetchForecastWeather(): void {
    if (this.stateService.weather) {
      return;
    }
    this.weatherService.getForecastWeather({
      q: this.stateService.locations[0].city,
      days: environment.forecastDays
    }).subscribe(weather => this.stateService.addWeather(weather))
  }

  private emptyResponse(): AstronomyWeatherResponse {
    return {
      astronomy: {
        astro: {}
      },
      location: {},
    } as AstronomyWeatherResponse;
  }
}
