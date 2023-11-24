import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';
import { PropertyItemComponent } from '../../../../elements/property-item/property-item.component';

@Component({
  selector: 'app-more-details',
  standalone: true,
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    SvgIconComponent,
    PropertyItemComponent,
  ],
})
export class MoreDetailsComponent {
  @Output() readonly collapse$ = new EventEmitter<void>();
}
