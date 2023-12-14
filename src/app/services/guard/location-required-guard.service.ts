import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { StateService } from '../state/state.service';

@Injectable({ providedIn: 'root' })
export class LocationRequiredGuardService implements CanActivate {
  constructor(
    private stateService: StateService,
  ) {}

  canActivate(_a: ActivatedRouteSnapshot, _r: RouterStateSnapshot): boolean {
    return this.stateService.locations?.length > 0;
  }
}
