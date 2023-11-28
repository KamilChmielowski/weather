import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';

import {
  Distance,
  Precitipation,
  Pressure,
  Temperature,
  WindSpeed
} from '../../../../services/settings/settings.model';
import { OptionsButtonComponent } from './options-button/options-button.component';
import { SwitchButtonComponent } from './switch-button/switch-button.component';
import { SettingsService } from '../../../../services/settings/settings.service';
import { SettingIndexPipe } from './setting-index.pipe';

@Component({
  selector: 'app-settings-main',
  standalone: true,
  templateUrl: './settings-main.component.html',
  styleUrls: ['./settings-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    OptionsButtonComponent,
    SettingIndexPipe,
    SvgIconComponent,
    SwitchButtonComponent,
  ],
})
export class SettingsMainComponent {
  readonly temperature = new Map([
    [ Temperature.celsius, 'Celsius' ],
    [ Temperature.fahrenheit, 'Fahrenheit' ],
  ]);

  readonly windSpeed = new Map([
    [ WindSpeed.kmPerHour, 'km/h' ],
    [ WindSpeed.mPerSec, 'm/s' ],
    [ WindSpeed.knots, 'Knots' ],
  ]);

  readonly pressure = new Map([
    [ Pressure.hectoPascal, 'hPa' ],
    [ Pressure.inches, 'Inches of mercury' ],
    [ Pressure.kiloPascal, 'kPa' ],
    [ Pressure.mm, 'mmHg' ],
  ]);

  readonly precitipation = new Map([
    [ Precitipation.milimeters, 'Milimeters' ],
    [ Precitipation.inches, 'Inches' ],
  ]);

  readonly distance = new Map([
    [ Distance.kilometers, 'Kilometers' ],
    [ Distance.miles, 'Miles' ],
  ]);

  constructor(public settingsService: SettingsService) {}
}
