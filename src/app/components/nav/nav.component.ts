import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { SvgIconComponent } from 'angular-svg-icon';
import { SvgPipe } from '../../pipes/svg.pipe';

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        RouterLink,
        RouterLinkActive,
        SvgIconComponent,
        SvgPipe,
    ],
})
export class NavComponent {}
