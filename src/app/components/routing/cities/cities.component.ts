import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { forkJoin } from 'rxjs';
import { SvgIconComponent } from 'angular-svg-icon';

import { CitiesAsideComponent } from './aside/cities-aside.component';
import { CitiesMainComponent } from './main/cities-main.component';
import { StateService } from '../../../services/state/state.service';
import { WeatherDataComponent } from '../../abstract/weather-data.component';
import { WeatherService } from '../../../services/weather/weather.service';

@Component({
  selector: 'app-cities',
  standalone: true,
  templateUrl: './cities.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'layout-page' },
  imports: [
    CommonModule,
    SvgIconComponent,
    CitiesAsideComponent,
    CitiesMainComponent,
  ],
})
export class CitiesComponent extends WeatherDataComponent {
  constructor(
    protected override cdr: ChangeDetectorRef,
    protected override stateService: StateService,
    private weatherService: WeatherService,
  ) {
    super(cdr, stateService);
  }

  override ngOnInit() {
    super.ngOnInit();
    this.fetchLocations();
  }

  fetchLocations(): void {
    if (this.stateService.locations?.length === 0) {
      return;
    }
    forkJoin(this.stateService.locations.map(location => {
      return this.weatherService.getForecastWeather({ q: location.city, days: 7 });
    })).subscribe(response => {
      this.stateService.changeLocation(this.stateService.locations[0].city);
      this.stateService.updateWeathers(response);
      this.cdr.markForCheck();
    })
  }
}
