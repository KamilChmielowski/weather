import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-hour-item',
  standalone: true,
  templateUrl: './hour-item.component.html',
  styleUrls: ['./hour-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    SvgIconComponent,
  ],
})
export class HourItemComponent {
  @Input() hour!: number;
  @Input() icon!: string;
  @Input() temp!: number;
}
