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
import { StateComponent } from '../../../services/state/state.component';
import { StateService } from '../../../services/state/state.service';

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
  ],
})
export class SearchInputComponent extends StateComponent implements OnInit {
  readonly form = new FormGroup({
    search: new FormControl<string>('')
  })

  isLoading = false;
  showSuggestions = false;
  skipRequest = false;
  searchResults!: GeoAutocompleteResponse;

  private insideForm = false;

  constructor(
    private cdr: ChangeDetectorRef,
    @Inject(DOCUMENT) private document: Document,
    private geolocationService: GeoapifyService,
    protected override stateService: StateService,
  ) {
    super(stateService);
  };

  ngOnInit() {
    this.fetchLocationData();
    if (this.stateService.city) {
      this.setSearchValueProgrammatically(this.stateService.city);
    }
  }

  private setSearchValueProgrammatically(value: string | null): void {
    this.form.controls.search.setValue(value);
    this.skipRequest = true;
  }

  selectLocation(item: GeoAutocompleteFeature): void {
    if (this.form.controls.search.value !== item.properties.city) {
      this.setSearchValueProgrammatically(item.properties.city || null);
      this.form.controls.search.setValue(item.properties.city || '');
      this.stateService.updateLocation([item.properties.lat as number, item.properties.lon as number], item.properties.city);

    }
    this.showSuggestions = false;
  }

  focusout(): void {
    if (!this.insideForm) {
      this.showSuggestions = false;
    }
  }

  mouseleave(): void {
    this.insideForm = false;
  }

  mouseenter(): void {
    this.insideForm = true;
  }

  private fetchLocationData(): void {
    this.getAutocompleteObservable(this.form.controls.search!.valueChanges).subscribe(value => {
      if (!value) {
        return;
      }
      this.searchResults = this.getFilteredResults(value);
      this.isLoading = false;
      this.cdr.markForCheck();
    });
  }

  private getAutocompleteObservable(observable: Observable<string | null>): Observable<GeoAutocompleteResponse | null> {
    return observable.pipe(
      distinctUntilChanged(),
      debounceTime(1000),
      switchMap(value => {
        if (this.skipRequest) {
          this.skipRequest = false;
          return of(null);
        }
        this.isLoading = true;
        this.cdr.markForCheck();
        return this.geolocationService.getAutocomplete(value);
      }),
    );
  }

  private getFilteredResults(value: GeoAutocompleteResponse): GeoAutocompleteResponse {
    return {
      query: value.query,
      features: value.features
        .filter(value => value.properties.city)
        .filter((value, i, array) => array.findIndex(v => v.properties.city === value.properties.city) === i),
    };
  }
}
