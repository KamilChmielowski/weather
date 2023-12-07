import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';

import { PropertyItemMoonComponent } from './property-item-moon/property-item-moon.component';

@Component({
  selector: 'app-moon-info',
  standalone: true,
  templateUrl: './moon-info.component.html',
  styleUrls: ['./moon-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    SvgIconComponent,
    PropertyItemMoonComponent,
  ],
})
export class MoonInfoComponent {
  @Input() @HostBinding('class.astronomy-loading') astronomyLoading = true;
  @Input() moonPhase: string | undefined;
  @Input() moonIllumination: number | undefined;
}
