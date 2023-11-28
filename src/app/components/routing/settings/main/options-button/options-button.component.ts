import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
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
export class OptionsButtonComponent<T> {
  @Input() options!: Array<KeyValue<T, string>>;
  @Input() selectedIndex = 0;

  @Output() readonly key$ = new EventEmitter<T>();

  select(index: number, key: T): void {
    this.selectedIndex = index;
    this.key$.emit(key);
  }
}
