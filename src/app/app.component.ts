import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { switchMap } from 'rxjs';

import { GeoapifyService } from './services/geoapify/geoapify.service';
import { StateService } from './services/state/state.service';
import { WeatherService } from './services/weather/weather.service';
import { StateComponent } from './services/state/state.component';

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
        switchMap(location => this.weatherService
          .getRealtimeWeather({ q: `${location[0]},${location[1]}` })
        )
      ).subscribe(weather => this.stateService.updateWeather(weather))
    );
  }
}
