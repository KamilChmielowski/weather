import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, EventEmitter,
  Inject,
  OnInit, Output,
} from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { SvgIconComponent } from 'angular-svg-icon';

import { GeoapifyService } from '../../../services/geoapify/geoapify.service';
import { GeoAutocompleteFeature, GeoAutocompleteResponse } from '../../../services/geoapify/geoautocomplete.model';

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
  @Output() readonly location$ = new EventEmitter<[number, number]>();

  readonly form = new FormGroup({
    search: new FormControl<string>('')
  })

  showSuggestions = false;
  searchResults!: GeoAutocompleteResponse;

  private insideForm = false;

  constructor(
    private cdr: ChangeDetectorRef,
    @Inject(DOCUMENT) private document: Document,
    private geolocationService: GeoapifyService
  ) {};

  ngOnInit() {
    this.form.controls.search!.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(1000),
      switchMap(value => this.geolocationService.getAutocomplete(value)),
    ).subscribe(value => {
      this.searchResults = {
        query: value.query,
        features: value.features
          .filter(value => value.properties.city)
          .filter((value, i, array) => array.findIndex(v => v.properties.city === value.properties.city) === i),
      };
      this.cdr.markForCheck();
    })
  }

  selectLocation(item: GeoAutocompleteFeature): void {
    this.form.controls.search.setValue(`${item.properties.city}, ${item.properties.country}`);
    this.location$.emit([item.properties.lat as number, item.properties.lon as number])
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
