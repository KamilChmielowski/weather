import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { LoadingComponent } from './loading.component';
import { RealtimeWeatherResponse } from '../../services/weather/weather.model';
import { StateService } from '../../services/state/state.service';

@Component({ template: '' })
export abstract class WeatherDataComponent extends LoadingComponent implements OnInit {
  protected weather?: RealtimeWeatherResponse | undefined;

  constructor(
    protected override cdr: ChangeDetectorRef,
    protected override stateService: StateService,
  ) {
    super(cdr, stateService);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.observeWeather();
  }

  private observeWeather(): void {
    this.subscription.add(
      this.stateService.weather$.subscribe(weather => {
        this.weather = weather;
        this.cdr.markForCheck();
      })
    );
  }
}
