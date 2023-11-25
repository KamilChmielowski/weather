import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';
import { SearchInputComponent } from '../../../elements/search-input/search-input.component';

@Component({
  selector: 'app-map-main',
  standalone: true,
  templateUrl: './map-main.component.html',
  styleUrls: ['./map-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    SvgIconComponent,
    SearchInputComponent,
  ],
})
export class MapMainComponent {}
