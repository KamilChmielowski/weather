import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherAsideComponent } from './weather-aside.component';

describe('WeatherAsideComponent', () => {
  let component: WeatherAsideComponent;
  let fixture: ComponentFixture<WeatherAsideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WeatherAsideComponent]
    });
    fixture = TestBed.createComponent(WeatherAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
