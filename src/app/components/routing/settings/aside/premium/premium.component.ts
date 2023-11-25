import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-premium',
  standalone: true,
  templateUrl: './premium.component.html',
  styleUrls: [
    './premium.component.scss',
    '../newsletter/newsletter.component.scss'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    SvgIconComponent,
  ],
})
export class PremiumComponent {}
