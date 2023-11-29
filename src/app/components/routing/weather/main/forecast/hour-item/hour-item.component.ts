import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';
import { SvgPipe } from '../../../../../../pipes/svg.pipe';

@Component({
  selector: 'app-hour-item',
  standalone: true,
  templateUrl: './hour-item.component.html',
  styleUrls: ['./hour-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        SvgIconComponent,
        SvgPipe,
    ],
})
export class HourItemComponent {
  @Input() hour!: number;
  @Input() icon!: string;
  @Input() temp!: number;
}
