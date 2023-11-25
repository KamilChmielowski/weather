import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';

import { CityItemComponent } from './city-item/city-item.component';
import { SearchInputComponent } from '../../../elements/search-input/search-input.component';

@Component({
  selector: 'app-cities-main',
  standalone: true,
  templateUrl: './cities-main.component.html',
  styleUrls: ['./cities-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CityItemComponent,
    CommonModule,
    SvgIconComponent,
    SearchInputComponent,
  ],
})
export class CitiesMainComponent {}
