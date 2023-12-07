import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';
import { PressurePipe } from '../../../../../pipes/pressure.pipe';
import { PropertyItemComponent } from '../../../../elements/property-item/property-item.component';
import { WindPipe } from '../../../../../pipes/wind.pipe';
import {
  PropertyItemNoLoadingComponent
} from '../../../../elements/property-item-no-loading/property-item-no-loading.component';

@Component({
  selector: 'app-moon-info',
  standalone: true,
  templateUrl: './moon-info.component.html',
  styleUrls: ['./moon-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    SvgIconComponent,
    PressurePipe,
    PropertyItemComponent,
    WindPipe,
    PropertyItemNoLoadingComponent
  ],
})
export class MoonInfoComponent {}
