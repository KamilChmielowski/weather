import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';

import { SearchInputComponent } from '../../elements/search-input/search-input.component';
import { StateComponent } from '../../abstract/state.component';
import { StateService } from '../../../services/state/state.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'layout-page' },
  imports: [
    CommonModule,
    SearchInputComponent,
  ],
})
export class WelcomeComponent extends StateComponent implements OnInit {
  constructor(
    protected override stateService: StateService,
    private router: Router
  ) {
    super(stateService);
  }

  ngOnInit() {
    this.observeLocation();
  }

  private observeLocation(): void {
    this.subscription.add(
      this.stateService.location$
        .subscribe(location => this.router.navigate(['weather']))
    );
  }
}
