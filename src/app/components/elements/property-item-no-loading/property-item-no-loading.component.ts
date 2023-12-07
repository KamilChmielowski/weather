import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';

import { PropertyItemComponent } from '../property-item/property-item.component';
import { SvgPipe } from '../../../pipes/svg.pipe';

@Component({
  selector: 'app-property-item-no-loading',
  standalone: true,
  templateUrl: '../property-item/property-item.component.html',
  styleUrls: ['../property-item/property-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        SvgIconComponent,
        SvgPipe,
    ],
})
export class PropertyItemNoLoadingComponent extends PropertyItemComponent {
  override ngOnInit() {
    this.isLoading = false;
  }
}
