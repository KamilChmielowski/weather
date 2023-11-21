import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherHeaderComponent } from './weather-header.component';

describe('WeatherHeaderComponent', () => {
  let component: WeatherHeaderComponent;
  let fixture: ComponentFixture<WeatherHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WeatherHeaderComponent]
    });
    fixture = TestBed.createComponent(WeatherHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
