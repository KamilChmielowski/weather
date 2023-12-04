import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';
import { switchMap } from 'rxjs';

import { StateService } from '../../../services/state/state.service';
import { WeatherAsideComponent } from './aside/weather-aside.component';
import { WeatherDataComponent } from '../../abstract/weather-data.component';
import { WeatherMainComponent } from './main/weather-main.component';
import { WeatherService } from '../../../services/weather/weather.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'layout-page' },
  imports: [
    CommonModule,
    SvgIconComponent,
    WeatherAsideComponent,
    WeatherMainComponent,
  ],
})
export class WeatherComponent extends WeatherDataComponent {
  constructor(
    protected override cdr: ChangeDetectorRef,
    protected override stateService: StateService,
    private weatherService: WeatherService,
  ) {
    super(cdr, stateService);
  }

  override ngOnInit() {
    super.ngOnInit();
    this.observeLocation();
  }

  protected override observeLocation(): void {
    this.subscription.add(
      this.stateService.location$.pipe(
        switchMap(model => this.weatherService
          .getForecastWeather({ q: model.city, days: 7 })
        )
      ).subscribe(weather => this.stateService.addWeather(weather))
    );
  }
}
