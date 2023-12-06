import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstronomyMainComponent } from './astronomy-main.component';

describe('AstronomyMainComponent', () => {
  let component: AstronomyMainComponent;
  let fixture: ComponentFixture<AstronomyMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AstronomyMainComponent]
    });
    fixture = TestBed.createComponent(AstronomyMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
