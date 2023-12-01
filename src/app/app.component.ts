import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { switchMap } from 'rxjs';

import { GeoapifyService } from './services/geoapify/geoapify.service';
import { StateComponent } from './services/state/state.component';
import { StateService } from './services/state/state.service';
import { WeatherService } from './services/weather/weather.service';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [WeatherService],
})
export class AppComponent extends StateComponent implements OnInit {
  constructor(
    protected override stateService: StateService,
    private geolocationService: GeoapifyService,
    private weatherService: WeatherService,
  ) {
    super(stateService)
  }

  ngOnInit() {
    this.observeLocation();
  }

  private observeLocation(): void {
    this.subscription.add(
      this.stateService.location$.pipe(
        switchMap(model => this.weatherService
          .getRealtimeWeather({ q: `${model.coords[0]},${model.coords[1]}` })
        )
      ).subscribe(weather => this.stateService.addWeather(weather))
    );
  }
}
