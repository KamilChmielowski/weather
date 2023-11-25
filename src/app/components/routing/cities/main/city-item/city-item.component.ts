import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-city-item',
  standalone: true,
  templateUrl: './city-item.component.html',
  styleUrls: ['./city-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    SvgIconComponent,
  ],
})
export class CityItemComponent {
  @Input() city!: string;
  @Input() hour!: string;
  @Input() temp!: string;
}
