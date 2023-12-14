import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapComponent, MarkerComponent } from '@maplibre/ngx-maplibre-gl';
import { SvgIconComponent } from 'angular-svg-icon';
import { environment } from '../../../../../environments/environment';
import { StateComponent } from '../../../abstract/state.component';
import { StateService } from '../../../../services/state/state.service';

@Component({
  selector: 'app-map-main',
  standalone: true,
  templateUrl: './map-main.component.html',
  styleUrls: ['./map-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    MapComponent,
    SvgIconComponent,
    MarkerComponent,
  ],
})
export class MapMainComponent extends StateComponent implements OnInit {
  protected readonly environment = environment;
  protected location = this.stateService.location;

  constructor(
    private cdr: ChangeDetectorRef,
    protected override stateService: StateService,
  ) {
    super(stateService);
  }

  ngOnInit() {
    this.observeLocation();
  }

  private observeLocation(): void {
    this.subscription.add(
      this.stateService.location$.subscribe(location => {
        this.location = location;
        this.cdr.markForCheck();
      })
    );
  }
}
