import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { StateService } from '../state/state.service';

@Injectable({ providedIn: 'root' })
export class LocationRequiredGuardService implements CanActivate {
  constructor(
    private stateService: StateService,
    private router: Router,
  ) {}

  canActivate(_a: ActivatedRouteSnapshot, _r: RouterStateSnapshot): boolean {
    if (!this.stateService.location && this.stateService.locations?.length === 0) {
      this.stateService.isWelcome = true;
      this.router.navigate(['welcome']);
    }
    this.stateService.isWelcome = !this.stateService.location && this.stateService.locations?.length === 0;
    return !!this.stateService.location || this.stateService.locations?.length > 0
  }
}
