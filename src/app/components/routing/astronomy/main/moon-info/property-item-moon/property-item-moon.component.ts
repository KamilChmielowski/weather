import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';

import { PropertyItemComponent } from '../../../../../elements/property-item/property-item.component';
import { SvgPipe } from '../../../../../../pipes/svg.pipe';

@Component({
  selector: 'app-property-item-moon',
  standalone: true,
  templateUrl: '../../../../../elements/property-item/property-item.component.html',
  styleUrls: ['./property-item-moon.component.scss',],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    SvgIconComponent,
    SvgPipe,
  ],
})
export class PropertyItemMoonComponent extends PropertyItemComponent {
  @Input() @HostBinding('class.astronomy-loading') astronomyLoading = true;
}
