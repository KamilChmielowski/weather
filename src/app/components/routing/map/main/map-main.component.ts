import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-map-main',
  standalone: true,
  templateUrl: './map-main.component.html',
  styleUrls: ['./map-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    SvgIconComponent,
  ],
})
export class MapMainComponent {}
