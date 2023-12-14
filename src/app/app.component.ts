import { ChangeDetectionStrategy, Component } from '@angular/core';

import { StateComponent } from './components/abstract/state.component';
import { StateService } from './services/state/state.service';
import { WeatherService } from './services/weather/weather.service';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [WeatherService],
})
export class AppComponent extends StateComponent {
  constructor(
    protected override stateService: StateService,
  ) {
    super(stateService);
  }
}
