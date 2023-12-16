import { ChangeDetectorRef, Component, HostBinding, OnInit } from '@angular/core';

import { StateComponent } from './state.component';
import { StateService } from '../../services/state/state.service';

@Component({ template: '' })
export abstract class LoadingComponent extends StateComponent implements OnInit {
  @HostBinding('class.loading') isLoading = true;

  constructor(
    protected cdr: ChangeDetectorRef,
    protected override stateService: StateService,
  ) {
    super(stateService);
  }

  ngOnInit(): void {
    this.observeIsLoading();
  }

  private observeIsLoading(): void {
    this.subscription.add(
      this.stateService.isLoading$.subscribe(isLoading => {
        this.isLoading = isLoading;
        this.cdr.markForCheck();
      })
    );
  }
}
