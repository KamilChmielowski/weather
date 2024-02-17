import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { SvgIconComponent } from 'angular-svg-icon';

import { CityItemComponent } from './city-item/city-item.component';
import { CitySearchInputComponent } from './city-search-input/city-search-input.component';
import { StateService } from '../../../../services/state/state.service';
import { SvgPipe } from '../../../../pipes/svg.pipe';
import { TempPipe } from '../../../../pipes/temp.pipe';
import { WeatherDataComponent } from '../../../abstract/weather-data.component';
import { WeatherPipe } from '../../../../pipes/weather.pipe';
import { WeatherService } from '../../../../services/weather/weather.service';

@Component({
  selector: 'app-cities-main',
  standalone: true,
  templateUrl: './cities-main.component.html',
  styleUrls: ['./cities-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CityItemComponent,
    CitySearchInputComponent,
    CommonModule,
    SvgIconComponent,
    SvgPipe,
    TempPipe,
    WeatherPipe,
  ],
})
export class CitiesMainComponent extends WeatherDataComponent {
  protected searchDisabled = true;
  protected blockButton = false;
  protected removeConfirmed = false;

  constructor(
    protected override cdr: ChangeDetectorRef,
    protected override stateService: StateService,
    protected override weatherService: WeatherService,
    private router: Router,
  ) {
    super(cdr, stateService, weatherService);
  }

  protected addNewLocation(): void {
    if (this.blockButton) {
      return;
    }
    this.searchDisabled = false;
  }

  protected focusout(): void {
    this.searchDisabled = true;
    this.blockButton = true;
    setTimeout(() => this.blockButton = false, 100);
  }

  protected removeLocation(): void {
    if (this.removeConfirmed) {
      this.stateService.removeLocation();
      this.removeConfirmed = false;

      if (this.stateService.locations.length === 0) {
        this.stateService.isWelcome = true;
        this.router.navigate(['welcome']);
      }
    } else {
      this.removeConfirmed = true;
    }
  }
}
