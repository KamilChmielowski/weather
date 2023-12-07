import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';

import { MoonPhaseComponent } from './moon-phase/moon-phase.component';
import { SvgPipe } from '../../../../pipes/svg.pipe';

@Component({
  selector: 'app-astronomy-aside',
  standalone: true,
  templateUrl: './astronomy-aside.component.html',
  styleUrls: ['./astronomy-aside.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    MoonPhaseComponent,
    SvgIconComponent,
    SvgPipe,
  ],
})
export class AstronomyAsideComponent {
  @Input() moonPhase: string | undefined;
  @Input() north: boolean | undefined;

  protected readonly phases = [
    'New Moon',
    'Waxing Crescent',
    'First Quarter',
    'Waxing Gibbous',
    'Full Moon',
    'Waning Gibbous',
    'Last Quarter',
    'Waning Crescent'
  ];

  protected readonly southIcons = [
    'New Moon',
    'Waning Crescent',
    'Last Quarter',
    'Waning Gibbous',
    'Full Moon',
    'Waxing Gibbous',
    'First Quarter',
    'Waxing Crescent'
  ];
}
