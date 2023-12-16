import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapAsideComponent } from './aside/map-aside.component';
import { MapMainComponent } from './main/map-main.component';
import { StateService } from '../../../services/state/state.service';
import { WeatherDataComponent } from '../../abstract/weather-data.component';
import { WeatherService } from '../../../services/weather/weather.service';

@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'layout-page' },
  imports: [
    CommonModule,
    MapAsideComponent,
    MapMainComponent,
  ],
})
export class MapComponent extends WeatherDataComponent {
  constructor(
    protected override cdr: ChangeDetectorRef,
    protected override stateService: StateService,
    protected override weatherService: WeatherService,
  ) {
    super(cdr, stateService, weatherService);
  }

  override ngOnInit() {
    super.ngOnInit();
    this.fetchLocations();
  }
}
