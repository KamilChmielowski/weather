import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-property-item',
  standalone: true,
  templateUrl: './property-item.component.html',
  styleUrls: ['./property-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    SvgIconComponent,
  ],
})
export class PropertyItemComponent {
  @Input() icon!: string;
  @Input() label!: string;
  @Input() value!: string;
}
