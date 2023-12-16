import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { SvgIconComponent } from 'angular-svg-icon';

import { StateComponent } from '../abstract/state.component';
import { StateService } from '../../services/state/state.service';
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
export class NavComponent extends StateComponent implements OnInit {
  protected hasLocations = this.stateService.locations?.length > 0;

  constructor(
      private cdr: ChangeDetectorRef,
      protected override stateService: StateService
  ) {
    super(stateService);
  }

  ngOnInit() {
    this.subscription.add(
      this.stateService.location$
        .subscribe(() => {
          this.hasLocations = this.stateService.locations?.length > 0;
          this.cdr.markForCheck();
        })
    );
  }
}
