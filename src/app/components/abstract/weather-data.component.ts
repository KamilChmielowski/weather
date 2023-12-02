import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { RealtimeWeatherResponse } from '../../services/weather/weather.model';
import { StateComponent } from './state.component';
import { StateService } from '../../services/state/state.service';

@Component({ template: '' })
export abstract class WeatherDataComponent extends StateComponent implements OnInit {
  protected weather?: RealtimeWeatherResponse | undefined;

  constructor(
    protected cdr: ChangeDetectorRef,
    protected override stateService: StateService,
  ) {
    super(stateService)
  }

  ngOnInit(): void {
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
