import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';

import { SvgIconComponent } from 'angular-svg-icon';

import { StateComponent } from '../abstract/state.component';
import { StateService } from '../../services/state/state.service';
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
    SvgPipe,
  ],
})
export class FooterComponent extends StateComponent implements OnInit {
  @HostBinding('class.welcome') protected isWelcome = false;

  constructor(
    private router: Router,
    protected override stateService: StateService,
  ) {
    super(stateService);
  }

  ngOnInit() {
    this.observeRouterEvents();
  }

  private observeRouterEvents(): void {
    this.subscription.add(
      this.router.events.subscribe((val) => {
        if (val instanceof NavigationEnd) {
          this.isWelcome = val.url === '/welcome';
        }
      })
    );
  }
}
