import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { finalize } from 'rxjs';
import { Router } from '@angular/router';
import { SvgIconComponent } from 'angular-svg-icon';

import { GeolocationDbService } from '../../../services/geolocation-db/geolocation-db.service';
import { SearchInputComponent } from '../../elements/search-input/search-input.component';
import { StateComponent } from '../../abstract/state.component';
import { StateService } from '../../../services/state/state.service';
import { SvgPipe } from '../../../pipes/svg.pipe';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    SearchInputComponent,
    SvgIconComponent,
    SvgPipe,
  ],
})
export class WelcomeComponent extends StateComponent implements OnInit {
  protected isIpLoading = false;

  constructor(
    private cdr: ChangeDetectorRef,
    protected override stateService: StateService,
    private router: Router,
    private geolocationDbService: GeolocationDbService,
  ) {
    super(stateService);
  }

  ngOnInit() {
    this.observeLocation();
  }

  protected findUserLocationBasedOnIp(): void {
    if (this.isIpLoading) {
      return;
    }
    this.isIpLoading = true;
    this.geolocationDbService.getLocationBasedOnIp().pipe(
      finalize(() => this.isIpLoading = false),
    ).subscribe(res => {
      this.stateService.updateLocation({
        city: res.city as string,
        coords: [+res.latitude, +res.longitude],
      });
    })
  }

  private observeLocation(): void {
    this.subscription.add(
      this.stateService.location$
        .subscribe(location => this.router.navigate(['weather']))
    );
  }
}
