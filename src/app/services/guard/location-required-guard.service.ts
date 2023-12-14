import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { StateService } from '../state/state.service';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LocationRequiredGuardService implements CanActivate {
  constructor(
    private stateService: StateService,
  ) {}

  canActivate(_a: ActivatedRouteSnapshot, _r: RouterStateSnapshot): Observable<boolean> {
    return this.stateService.location$.pipe(
      map(() => this.stateService.locations?.length > 0)
    );
  }
}
