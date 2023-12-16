import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SettingsAsideComponent } from './aside/settings-aside.component';
import { SettingsMainComponent } from './main/settings-main.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  templateUrl: './settings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'layout-page' },
  imports: [
    SettingsAsideComponent,
    SettingsMainComponent,
  ],
})
export class SettingsComponent {}
