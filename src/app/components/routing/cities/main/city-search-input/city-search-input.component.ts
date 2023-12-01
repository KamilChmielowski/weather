import {
  ChangeDetectionStrategy,
  Component, ElementRef, EventEmitter,
  Input, OnChanges, OnInit, Output,
  SimpleChanges, ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SvgIconComponent } from 'angular-svg-icon';

import { GeoAutocompleteFeature } from '../../../../../services/geoapify/geoautocomplete.model';
import { SearchInputComponent } from '../../../../elements/search-input/search-input.component';
import { SvgPipe } from '../../../../../pipes/svg.pipe';

@Component({
  selector: 'app-city-search-input',
  standalone: true,
  templateUrl: './city-search-input.component.html',
  styleUrls: [
    '../../../../elements/search-input/search-input.component.scss',
    './city-search-input.component.scss'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SvgIconComponent,
    SvgPipe,
  ],
})
export class CitySearchInputComponent extends SearchInputComponent implements OnInit, OnChanges {
  @Input() disabled = false;

  @Output() readonly city$ = new EventEmitter<string>();

  @ViewChild('input', { static: false }) private readonly inputRef!: ElementRef<HTMLInputElement>;

  override ngOnInit() {
    this.fetchLocationData();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['disabled']) {
      if (changes['disabled'].currentValue) {
        this.form.controls.search.disable();
      } else {
        this.form.controls.search.enable();
        this.inputRef.nativeElement.focus();
      }
    }
  }

  override selectLocation(item: GeoAutocompleteFeature): void {
    if (this.stateService.location?.city !== item.properties.city) {
      this.city$.emit(item.properties.city);
      this.setSearchValueProgrammatically('');
      this.stateService.addLocation({
        city: item.properties.city as string,
        coords: [item.properties.lat as number, item.properties.lon as number],
      });
    }
    this.showSuggestions = false;
  }
}
