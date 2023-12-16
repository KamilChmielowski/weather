import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NewsletterComponent } from './newsletter/newsletter.component';
import { PremiumComponent } from './premium/premium.component';

@Component({
  selector: 'app-settings-aside',
  standalone: true,
  templateUrl: './settings-aside.component.html',
  styleUrls: ['./settings-aside.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    PremiumComponent,
    NewsletterComponent,
  ],
})
export class SettingsAsideComponent {}
