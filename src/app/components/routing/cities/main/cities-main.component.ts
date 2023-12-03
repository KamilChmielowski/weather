import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';

import { CityItemComponent } from './city-item/city-item.component';
import { CitySearchInputComponent } from './city-search-input/city-search-input.component';
import { SvgPipe } from '../../../../pipes/svg.pipe';
import { TempPipe } from '../../../../pipes/temp.pipe';
import { WeatherPipe } from '../../../../pipes/weather.pipe';
import { WeatherDataComponent } from '../../../abstract/weather-data.component';

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
  searchDisabled = true;
  blockButton = false;

  addNewLocation(): void {
    if (this.blockButton) {
      return;
    }
    this.searchDisabled = false;
  }

  focusout(): void {
    this.searchDisabled = true;
    this.blockButton = true;
    setTimeout(() => this.blockButton = false, 100);
  }
}
