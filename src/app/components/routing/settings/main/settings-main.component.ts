import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';
import { OptionsButtonComponent } from './options-button/options-button.component';
import { SwitchButtonComponent } from './switch-button/switch-button.component';

@Component({
  selector: 'app-settings-main',
  standalone: true,
  templateUrl: './settings-main.component.html',
  styleUrls: ['./settings-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    SvgIconComponent,
    OptionsButtonComponent,
    SwitchButtonComponent,
  ],
})
export class SettingsMainComponent {
  readonly temperature = new Map([
    [ 'c', 'Celsius' ],
    [ 'f', 'Fahrenheit' ],
  ]);

  readonly windSpeed = new Map([
    [ 'k', 'km/h' ],
    [ 'm', 'm/s' ],
    [ 'kn', 'Knots' ],
  ]);

  readonly pressure = new Map([
    [ 'h', 'hPa' ],
    [ 'i', 'Inches' ],
    [ 'k', 'kPa' ],
    [ 'm', 'mm' ],
  ]);

  readonly precitipation = new Map([
    [ 'm', 'Milimeters' ],
    [ 'i', 'Inches' ],
  ]);

  readonly distance = new Map([
    [ 'k', 'Kilometers' ],
    [ 'm', 'Miles' ],
  ]);
}
