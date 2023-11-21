import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';

import { SettingsMainComponent } from './main/settings-main.component';
import { SettingsAsideComponent } from './aside/settings-aside.component';

@Component({
  selector: 'app-aside',
  standalone: true,
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'layout-page' },
  imports: [
    CommonModule,
    SvgIconComponent,
    SettingsMainComponent,
    SettingsAsideComponent,
  ],
})
export class SettingsComponent {}
