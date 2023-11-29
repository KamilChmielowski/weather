import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from 'angular-svg-icon';
import { SvgPipe } from '../../pipes/svg.pipe';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        SvgIconComponent,
        SvgPipe
    ],
})
export class FooterComponent {}
