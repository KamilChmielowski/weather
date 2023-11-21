import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-map-aside',
  standalone: true,
  templateUrl: './map-aside.component.html',
  styleUrls: ['./map-aside.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    SvgIconComponent,
  ],
})
export class MapAsideComponent {}
