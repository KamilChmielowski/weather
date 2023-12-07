import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';
import { SvgPipe } from '../../../../pipes/svg.pipe';
import { RiseSetComponent } from './rise-set/rise-set.component';
import { MoonInfoComponent } from './moon-info/moon-info.component';

@Component({
  selector: 'app-astronomy-main',
  standalone: true,
  templateUrl: './astronomy-main.component.html',
  styleUrls: ['./astronomy-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    SvgIconComponent,
    SvgPipe,
    RiseSetComponent,
    MoonInfoComponent,
  ],
})
export class AstronomyMainComponent {}
