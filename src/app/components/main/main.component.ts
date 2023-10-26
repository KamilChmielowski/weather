import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';
import { HeaderComponent } from './header/header.component';
import { AirConditionsComponent } from './air-conditions/air-conditions.component';
import { ForecastComponent } from './forecast/forecast.component';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    SvgIconComponent,
    HeaderComponent,
    AirConditionsComponent,
    ForecastComponent,
  ],
})
export class MainComponent {}
