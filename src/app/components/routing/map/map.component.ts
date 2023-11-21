import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';

import { MapAsideComponent } from './aside/map-aside.component';
import { MapMainComponent } from './main/map-main.component';

@Component({
  selector: 'app-aside',
  standalone: true,
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'layout-page' },
  imports: [
    CommonModule,
    MapAsideComponent,
    MapMainComponent,
    SvgIconComponent,
  ],
})
export class MapComponent {}
