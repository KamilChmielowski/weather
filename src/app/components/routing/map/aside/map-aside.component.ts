import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';
import { CityItemComponent } from '../../cities/main/city-item/city-item.component';

@Component({
  selector: 'app-map-aside',
  standalone: true,
  templateUrl: './map-aside.component.html',
  styleUrls: ['./map-aside.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        SvgIconComponent,
        CityItemComponent,
    ],
})
export class MapAsideComponent {}
