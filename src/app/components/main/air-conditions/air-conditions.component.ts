import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-air-conditions',
  standalone: true,
  templateUrl: './air-conditions.component.html',
  styleUrls: ['./air-conditions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    SvgIconComponent,
  ],
})
export class AirConditionsComponent {}
