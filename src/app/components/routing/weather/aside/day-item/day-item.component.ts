import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';
import { SvgPipe } from '../../../../../pipes/svg.pipe';

@Component({
  selector: 'app-day-item',
  standalone: true,
  templateUrl: './day-item.component.html',
  styleUrls: ['./day-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        SvgIconComponent,
        SvgPipe,
    ],
})
export class DayItemComponent {
  @Input() day!: string;
  @Input() icon!: string;
  @Input() conditions!: string;
  @Input() tempDay!: string;
  @Input() tempNight!: string;
}
