import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';

import { LoadingComponent } from '../../../../abstract/loading.component';
import { SvgPipe } from '../../../../../pipes/svg.pipe';

@Component({
  selector: 'app-moon-phase',
  standalone: true,
  templateUrl: './moon-phase.component.html',
  styleUrls: ['./moon-phase.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    SvgIconComponent,
    SvgPipe,
  ],
})
export class MoonPhaseComponent extends LoadingComponent {
  @Input() icon!: string;
  @Input() name!: string;
  @Input() no!: string;
}
