import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';

import {
  Distance,
  Precitipation,
  Pressure,
  Setting,
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
  readonly temperature: Setting<Temperature>[] = [
    { key: Temperature.celsius, value: 'Celsius' },
    { key: Temperature.fahrenheit, value: 'Fahrenheit' },
  ];

  readonly windSpeed: Setting<WindSpeed>[] = [
    { key: WindSpeed.kmPerHour, value: 'km/h' },
    { key: WindSpeed.mPerSec, value: 'm/s' },
    { key: WindSpeed.knots, value: 'Knots' },
  ];

  readonly pressure: Setting<Pressure>[] = [
    { key: Pressure.hectoPascal, value: 'hPa' },
    { key: Pressure.inches, value: 'Inches of mercury' },
    { key: Pressure.kiloPascal, value: 'kPa' },
    { key: Pressure.mm, value: 'mmHg' },
  ];

  readonly precitipation: Setting<Precitipation>[] = [
    { key: Precitipation.milimeters, value: 'Milimeters' },
    { key: Precitipation.inches, value: 'Inches' },
  ];

  readonly distance: Setting<Distance>[] = [
    { key: Distance.kilometers, value: 'Kilometers' },
    { key: Distance.miles, value: 'Miles' },
  ];

  constructor(public settingsService: SettingsService) {}
}
