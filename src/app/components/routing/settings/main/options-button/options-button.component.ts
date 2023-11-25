import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule, KeyValue } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-options-button',
  standalone: true,
  templateUrl: './options-button.component.html',
  styleUrls: ['./options-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    SvgIconComponent,
  ],
})
export class OptionsButtonComponent {
  @Input() options!: Array<KeyValue<string, string>>;

  selectedIndex = 0;
}
