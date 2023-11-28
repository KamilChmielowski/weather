import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { debounceTime, distinctUntilChanged, of, switchMap } from 'rxjs';
import { SvgIconComponent } from 'angular-svg-icon';

import { GeoapifyService } from '../../../services/geoapify/geoapify.service';
import { GeoAutocompleteFeature, GeoAutocompleteResponse } from '../../../services/geoapify/geoautocomplete.model';
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
export class SearchInputComponent implements OnInit {
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
    private stateService: StateService,
  ) {};

  ngOnInit() {
    this.form.controls.search!.valueChanges.pipe(
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
    ).subscribe(value => {
      if (!value) {
        return;
      }
      this.searchResults = {
        query: value.query,
        features: value.features
          .filter(value => value.properties.city)
          .filter((value, i, array) => array.findIndex(v => v.properties.city === value.properties.city) === i),
      };
      this.isLoading = false;
      this.cdr.markForCheck();
    })
  }

  selectLocation(item: GeoAutocompleteFeature): void {
    if (this.form.controls.search.value !== `${item.properties.city}, ${item.properties.country}`) {
      this.form.controls.search.setValue(`${item.properties.city}, ${item.properties.country}`);
      this.stateService.updateLocation([item.properties.lat as number, item.properties.lon as number]);
      this.skipRequest = true;
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
}
