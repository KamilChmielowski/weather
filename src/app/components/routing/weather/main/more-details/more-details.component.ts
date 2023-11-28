import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';

import { PropertyItemComponent } from '../../../../elements/property-item/property-item.component';
import { RealtimeWeatherResponse } from '../../../../../services/weather/weather.model';

@Component({
  selector: 'app-more-details',
  standalone: true,
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    PropertyItemComponent,
    SvgIconComponent,
  ],
})
export class MoreDetailsComponent {
  @Input() weather: RealtimeWeatherResponse | undefined;

  @Output() readonly collapse$ = new EventEmitter<void>();
}
