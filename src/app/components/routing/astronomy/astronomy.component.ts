import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';

import { AstronomyAsideComponent } from './aside/astronomy-aside.component';
import { AstronomyMainComponent } from './main/astronomy-main.component';

@Component({
  selector: 'app-astronomy',
  standalone: true,
  templateUrl: './astronomy.component.html',
  styleUrls: ['./astronomy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'layout-page' },
  imports: [
    CommonModule,
    AstronomyAsideComponent,
    AstronomyMainComponent,
    SvgIconComponent,
  ],
})
export class AstronomyComponent {}
