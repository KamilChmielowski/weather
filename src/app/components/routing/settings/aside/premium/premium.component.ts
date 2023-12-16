import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-premium',
  standalone: true,
  templateUrl: './premium.component.html',
  styleUrls: [
    './premium.component.scss',
    '../newsletter/newsletter.component.scss'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PremiumComponent {}
