import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';
import { SvgPipe } from '../../../../../pipes/svg.pipe';

@Component({
  selector: 'app-city-item',
  standalone: true,
  templateUrl: './city-item.component.html',
  styleUrls: ['./city-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        SvgIconComponent,
        SvgPipe,
    ],
})
export class CityItemComponent {
  @Input() city!: string;
  @Input() hour!: string;
  @Input() temp!: string;
}
