import { Component, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { StateService } from '../../services/state/state.service';

@Component({ template: '' })
export abstract class StateComponent implements OnDestroy {
  protected subscription = new Subscription();

  protected constructor(protected stateService: StateService,) {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
