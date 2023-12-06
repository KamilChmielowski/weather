import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { debounceTime, distinctUntilChanged, Observable, of, switchMap } from 'rxjs';
import { SvgIconComponent } from 'angular-svg-icon';

import { GeoapifyService } from '../../../services/geoapify/geoapify.service';
import { GeoAutocompleteFeature, GeoAutocompleteResponse } from '../../../services/geoapify/geoautocomplete.model';
import { StateComponent } from '../../abstract/state.component';
import { StateService } from '../../../services/state/state.service';
import { SvgPipe } from '../../../pipes/svg.pipe';
import { WeatherService } from '../../../services/weather/weather.service';

@Component({
  selector: 'app-search-input',
  standalone: true,
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SvgIconComponent,
    SvgPipe,
  ],
})
export class SearchInputComponent extends StateComponent implements OnInit {
  readonly form = new FormGroup({
    search: new FormControl<string>('')
  })

  isFocused = false;
  isLoading = false;
  showSuggestions = false;
  skipRequest = false;
  searchResults!: GeoAutocompleteResponse;

  private insideForm = false;

  constructor(
    protected cdr: ChangeDetectorRef,
    @Inject(DOCUMENT) protected document: Document,
    protected geolocationService: GeoapifyService,
    protected override stateService: StateService,
    protected weatherService: WeatherService,
  ) {
    super(stateService);
  };

  ngOnInit() {
    this.fetchLocationData();
    if (this.stateService.location) {
      this.setSearchValueProgrammatically(this.stateService.location.city);
    }
  }

  selectLocation(item: GeoAutocompleteFeature): void {
    if (this.form.controls.search.value !== item.properties.city) {
      this.setSearchValueProgrammatically(item.properties.city || null);
      this.stateService.updateLocation({
        city: item.properties.city as string,
        coords: [item.properties.lat as number, item.properties.lon as number],
      });
    }
    this.showSuggestions = false;
  }

  focusin(): void {
    this.showSuggestions = true;
    this.isFocused = true;
  }

  focusout(): void {
    if (!this.insideForm) {
      this.showSuggestions = false;
    }
    this.isFocused = false;
  }

  mouseleave(): void {
    this.insideForm = false;
  }

  mouseenter(): void {
    this.insideForm = true;
  }

  protected setSearchValueProgrammatically(value: string | null): void {
    this.form.controls.search.setValue(value);
    this.skipRequest = true;
  }

  protected fetchLocationData(): void {
    this.getAutocompleteObservable(this.form.controls.search!.valueChanges).subscribe(value => {
      if (!value) {
        return;
      }
      this.searchResults = this.getFilteredResults(value);
      this.isLoading = false;
      this.cdr.markForCheck();
    });
  }

  protected getAutocompleteObservable(observable: Observable<string | null>): Observable<GeoAutocompleteResponse | null> {
    return observable.pipe(
      distinctUntilChanged(),
      debounceTime(1000),
      switchMap(value => {
        if (this.skipRequest || !value || value.length < 3) {
          this.skipRequest = false;
          return of(null);
        }
        this.isLoading = true;
        this.cdr.markForCheck();
        return this.geolocationService.getAutocomplete(value);
      }),
    );
  }

  protected getFilteredResults(value: GeoAutocompleteResponse): GeoAutocompleteResponse {
    return {
      query: value.query,
      features: value.features
        .filter(value => value.properties.city)
        .filter((value, i, array) => array.findIndex(v => v.properties.city === value.properties.city) === i),
    };
  }
}
