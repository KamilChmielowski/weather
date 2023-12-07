import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';

import { SvgPipe } from '../../../../../pipes/svg.pipe';

@Component({
  selector: 'app-rise-set',
  standalone: true,
  templateUrl: './rise-set.component.html',
  styleUrls: ['./rise-set.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    SvgIconComponent,
    SvgPipe,
  ],
})
export class RiseSetComponent {
  @Input() @HostBinding('class.astronomy-loading') astronomyLoading = true;
  @Input() sunrise: string | undefined;
  @Input() sunset: string | undefined;
  @Input() moonrise: string | undefined;
  @Input() moonset: string | undefined;
}
