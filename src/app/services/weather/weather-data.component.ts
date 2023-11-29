import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { StateComponent } from '../state/state.component';
import { RealtimeWeatherResponse } from './weather.model';
import { StateService } from '../state/state.service';

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
