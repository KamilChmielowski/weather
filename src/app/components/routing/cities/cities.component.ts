import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';
import { CitiesAsideComponent } from './aside/cities-aside.component';
import { CitiesMainComponent } from './main/cities-main.component';

@Component({
  selector: 'app-aside',
  standalone: true,
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'layout-page' },
  imports: [
    CommonModule,
    SvgIconComponent,
    CitiesAsideComponent,
    CitiesMainComponent,
  ],
})
export class CitiesComponent {}
