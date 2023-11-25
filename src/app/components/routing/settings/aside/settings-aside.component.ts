import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';

import { NewsletterComponent } from './newsletter/newsletter.component';
import { PremiumComponent } from './premium/premium.component';

@Component({
  selector: 'app-settings-aside',
  standalone: true,
  templateUrl: './settings-aside.component.html',
  styleUrls: ['./settings-aside.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    SvgIconComponent,
    PremiumComponent,
    NewsletterComponent,
  ],
})
export class SettingsAsideComponent {}
