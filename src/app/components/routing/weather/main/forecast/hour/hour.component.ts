import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-hour',
  standalone: true,
  templateUrl: './hour.component.html',
  styleUrls: ['./hour.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    SvgIconComponent,
  ],
})
export class HourComponent {
  @Input() hour!: number;
  @Input() icon!: string;
  @Input() temp!: number;
}
