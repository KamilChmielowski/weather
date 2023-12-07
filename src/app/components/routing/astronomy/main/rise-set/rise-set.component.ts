import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';

import { SvgPipe } from '../../../../../pipes/svg.pipe';

@Component({
  selector: 'app-rise-set',
  standalone: true,
  templateUrl: './rise-set.component.html',
  styleUrls: ['./rise-set.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    SvgIconComponent,
    SvgPipe
  ],
})
export class RiseSetComponent {}
